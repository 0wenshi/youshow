const express = require('express');
const { sendTicketEmail } = require('../services/emailService');
const {
  User,
  Events,
  EventDetails,
  EventTimestamps,
  Ticket,
} = require('../models');
const { verifyUser } = require('../middlewares/authenticate');
const router = express.Router();

router.post('/purchase', verifyUser, async (req, res) => {
  try {
    const { event_id, seat } = req.body;
    const user_id = req.user.id; // Gets the user ID from the JWT

    console.log('Request body:', req.body);

    const user = await User.findByPk(user_id);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'User not authenticated. Please log in.' });
    }

    // get event details
    const event = await Events.findByPk(event_id, {
      include: [
        {
          model: EventDetails,
          as: 'details',
          attributes: ['description', 'location', 'price'],
        },
        {
          model: EventTimestamps,
          as: 'timestamps',
          attributes: ['event_date', 'start_time', 'end_time'],
        },
      ],
      raw: false, // return the data as an object
    });
    //   console.log('Timestamps Type:', typeof event.timestamps);
    //   console.log('Timestamps Data:', JSON.stringify(event.timestamps, null, 2));
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    if (!event.timestamps) {
      return res.status(404).json({ message: 'EventTimestamp not found' });
    }

    // create a new ticket
    const ticket = await Ticket.create({
      user_id,
      event_id,
      seat,
      order_id: `ORDER-${Date.now()}`,
    });

    const eventDetails = event.details[0];
    const eventTimestamp = event.timestamps || {}; // get the timestamp object

    // send ticket email
    await sendTicketEmail(user.email, {
      eventName: event.title,
      eventDate: eventTimestamp
        ? eventTimestamp.event_date
        : 'Date not available',
      startTime: eventTimestamp
        ? eventTimestamp.start_time
        : 'Time not available',
      endTime: eventTimestamp ? eventTimestamp.end_time : 'Time not available',
      venue: eventDetails ? eventDetails.location : 'Venue not specified',
      seat,
      order_id: ticket.order_id,
    });

    res.status(201).json({ message: 'Ticket purchased successfully', ticket });
    console.log('New ticket orderId:', ticket.order_id);
  } catch (error) {
    console.error('Ticket purchase error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
