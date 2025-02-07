const express = require('express');
const { Op } = require('sequelize');
const { Events, EventDetails, EventTimestamps, Locales } = require('../models');

const router = express.Router();

// Get all events with details and timestamps
router.get('/', async (req, res) => {
  const { locale } = req.query;

  try {
    const events = await Events.findAll({
      include: [
        {
          model: EventDetails,
          as: 'details',
          include: [
            {
              model: Locales,
              where: locale ? { locale_code: locale } : {}, // Filter by locale if provided
            },
          ],
        },
        {
          model: EventTimestamps,
          as: 'timestamps',
          attributes: ['event_date', 'start_time', 'end_time'],
          required: false,
        },
      ],
    });

    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.stack);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

// Gets the event details for the specified event_id
router.get('/by-id/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Events.findByPk(id, {
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
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    console.log('Event found:', JSON.stringify(event, null, 2));
    res.status(200).json(event);
  } catch (error) {
    console.error('Error fetching event:', error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get events for the specified date
router.get('/by-date/:date', async (req, res) => {
  const { date } = req.params; // Format: YYYY-MM-DD

  try {
    const events = await Events.findAll({
      include: [
        {
          model: EventDetails,
          as: 'details',
          attributes: ['event_id', 'description', 'location', 'price', 'link'],
          required: false, // Allow null values
        },
        {
          model: EventTimestamps,
          as: 'timestamps',
          attributes: ['event_id', 'event_date', 'start_time', 'end_time'],
          where: { event_date: date }, // Filter by the specified date
          required: true, // Ensure the event timestamp is included
        },
      ],
    });

    if (events.length === 0) {
      return res
        .status(404)
        .json({ message: 'No events found for the specified date' });
    }

    console.log('Events found:', JSON.stringify(events, null, 2));
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get events for the specified month and year
router.get('/by-month/:year/:month', async (req, res) => {
  const { year, month } = req.params;
  try {
    const monthPadded = month.padStart(2, '0'); // Make sure the month is in double digits
    const firstDay = `${year}-${monthPadded}-01`;
    const lastDay = new Date(year, month, 0).toISOString().split('T')[0];

    console.log(`Fetching events for ${year}-${monthPadded}...`);

    const events = await Events.findAll({
      include: [
        {
          model: EventTimestamps,
          as: 'timestamps',
          attributes: ['event_date', 'start_time', 'end_time'],
          where: {
            event_date: { [Op.between]: [firstDay, lastDay] },
          },
          required: true, // Only time stamped events are returned
        },
        {
          model: EventDetails,
          as: 'details',
          attributes: ['description', 'location', 'price'],
          required: false,
        },
      ],
    });

    if (events.length === 0) {
      return res
        .status(404)
        .json({ message: 'No events found for this month' });
    }

    console.log('Monthly Events Found:', JSON.stringify(events, null, 2));
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching monthly events:', error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
