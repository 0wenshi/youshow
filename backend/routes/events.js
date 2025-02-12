const express = require('express');
const { Op } = require('sequelize');
const { Events, EventDetails, EventTimestamps, Locales } = require('../models');

const router = express.Router();

// Get all events (locale filtering supported)
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

// Create a new event
router.post('/', async (req, res) => {
  const { title, details, timestamps } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Event title is required' });
  }

  try {
    console.log('Creating event with title:', title);

    // create Event
    const newEvent = await Events.create({ title });

    console.log('Event created:', newEvent);

    // handle EventDetails (multilingual)
    if (details && details.length > 0) {
      await Promise.all(
        details.map(async (detail) => {
          // search `locale_id`
          const locale = await Locales.findOne({
            where: { locale_code: detail.locale_code },
          });

          if (!locale) {
            console.error(`Locale ${detail.locale_code} not found.`);
            throw new Error(`Locale ${detail.locale_code} not found.`);
          }

          console.log(`Locale found: ${locale.locale_id}`);

          // create EventDetails
          await EventDetails.create({
            event_id: newEvent.event_id,
            locale_id: locale.locale_id,
            description: detail.description,
            location: detail.location,
            price: detail.price,
            image: detail.image,
            capacity: detail.capacity,
          });
          console.log(`EventDetail created for locale ${detail.locale_code}`);
        })
      );
    } else {
      console.warn(' No details provided for the event.');
    }

    // handle EventTimestamps
    if (timestamps && timestamps.length > 0) {
      await Promise.all(
        timestamps.map(async (timestamp) => {
          console.log(`Creating timestamp for event ${newEvent.event_id}...`);
          await EventTimestamps.create({
            event_id: newEvent.event_id,
            event_date: timestamp.event_date,
            start_time: timestamp.start_time,
            end_time: timestamp.end_time,
          });
          console.log(`Timestamp created for ${timestamp.event_date}`);
        })
      );
    } else {
      console.warn('No timestamps provided for the event.');
    }

    res
      .status(201)
      .json({ message: 'Event created successfully!', event: newEvent });
  } catch (error) {
    console.error('Error creating event:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

// Update an existing event
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, details, timestamps } = req.body;

  try {
    console.log(`Updating event ${id}...`);

    // Finds if the event exists
    const event = await Events.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Update event title
    await event.update({ title });
    console.log(`Event title updated: ${title}`);

    // Update EventDetails (Delete old data, recreate)
    if (details && details.length > 0) {
      console.log('Updating event details...');
      await EventDetails.destroy({ where: { event_id: id } });

      await Promise.all(
        details.map(async (detail) => {
          // search locale_id
          const locale = await Locales.findOne({
            where: { locale_code: detail.locale_code },
          });

          if (!locale) {
            console.error(`Locale ${detail.locale_code} not found.`);
            throw new Error(`Locale ${detail.locale_code} not found.`);
          }

          // create new EventDetails
          await EventDetails.create({
            event_id: id,
            locale_id: locale.locale_id,
            description: detail.description,
            location: detail.location,
            price: detail.price,
            image: detail.image,
            capacity: detail.capacity,
          });
        })
      );
      console.log('Event details updated!');
    }

    // Update EventTimestamps (Delete old data and create new data)
    if (timestamps && timestamps.length > 0) {
      console.log('Updating event timestamps...');
      await EventTimestamps.destroy({ where: { event_id: id } });

      await Promise.all(
        timestamps.map(async (timestamp) => {
          await EventTimestamps.create({
            event_id: id,
            event_date: timestamp.event_date,
            start_time: timestamp.start_time,
            end_time: timestamp.end_time,
          });
        })
      );
      console.log('Event timestamps updated!');
    }

    res.status(200).json({ message: 'Event updated successfully!' });
  } catch (error) {
    console.error('Error updating event:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

// Delete an event and its details
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(`Deleting event ${id}...`);

    // check whether the event exists
    const event = await Events.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // delete EventDetails
    console.log('Deleting event details...');
    await EventDetails.destroy({ where: { event_id: id } });

    // delete EventTimestamps
    console.log('Deleting event timestamps...');
    await EventTimestamps.destroy({ where: { event_id: id } });

    // delete Events
    await event.destroy();
    console.log('Event deleted successfully!');

    res.status(200).json({ message: 'Event deleted successfully!' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;
