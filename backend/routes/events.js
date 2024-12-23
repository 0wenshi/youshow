const express = require('express');
const { Op } = require('sequelize');
const Event = require('../models/Events');

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();

    // Format the returned data
    const formattedEvents = events.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.event_date,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      price: event.price,
      image: event.image,
      link: event.link,
    }));

    res.json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

// Gets the events for the specified month
router.get('/:year/:month', async (req, res) => {
  const { year, month } = req.params;

  try {
    const monthPadded = month.padStart(2, '0'); // Make sure the month is in double digits
    const lastDay = new Date(year, month, 0).getDate(); // Get the last day of the month

    const events = await Event.findAll({
      where: {
        event_date: {
          [Op.between]: [
            `${year}-${monthPadded}-01`,
            `${year}-${monthPadded}-${lastDay}`,
          ],
        },
      },
    });

    const formattedEvents = events.map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description,
      date: event.event_date,
      start_time: event.start_time,
      end_time: event.end_time,
      location: event.location,
      price: event.price,
      image: event.image,
      link: event.link,
    }));

    res.json(formattedEvents);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

module.exports = router;
