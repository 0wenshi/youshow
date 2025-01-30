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
          include: [
            {
              model: Locales,
              where: locale ? { locale_code: locale } : {}, // Filter by locale if provided
            },
          ],
        },
        {
          model: EventTimestamps,
        },
      ],
    });

    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

// Get events for the specified month and year
router.get('/:year/:month', async (req, res) => {
  const { year, month } = req.params;

  try {
    const monthPadded = month.padStart(2, '0'); // Ensure double-digit month
    const lastDay = new Date(year, month, 0).getDate(); // Get the last day of the month

    const events = await Events.findAll({
      include: [
        {
          model: EventTimestamps,
          where: {
            event_date: {
              [Op.between]: [
                `${year}-${monthPadded}-01`,
                `${year}-${monthPadded}-${lastDay}`,
              ],
            },
          },
          attributes: ['event_date', 'start_time', 'end_time'], // Include only required fields
        },
      ],
    });

    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

// Get events for the specified date
router.get('/:date', async (req, res) => {
  const { date } = req.params; // Format: YYYY-MM-DD

  try {
    const events = await Events.findAll({
      include: [
        {
          model: EventDetails,
          attributes: ['event_id', 'description', 'location', 'price', 'link'], // Include only required fields
          required: true, // Ensure the event details are included
        },
        {
          model: EventTimestamps,
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

    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});

module.exports = router;
