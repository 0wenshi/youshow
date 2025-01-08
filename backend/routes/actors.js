const express = require('express');
const { Actors, ActorDetails, Locales, ActorTimestamps } = require('../models');

const router = express.Router();

// Get actors by locale
router.get('/', async (req, res) => {
  const { locale } = req.query;

  try {
    const actors = await Actors.findAll({
      include: [
        {
          model: ActorDetails,
          include: [
            {
              model: Locales,
              where: locale ? { locale_code: locale } : {}, // Filter by locale if provided
            },
          ],
        },
        {
          model: ActorTimestamps,
        },
      ],
    });
    // console.log('Query Result:', actors);
    res.status(200).json(actors);
  } catch (error) {
    console.error('Error fetching actors:', error);
    res.status(500).json({ message: 'Failed to fetch actors' });
  }
});

// Add a new actor with details
router.post('/', async (req, res) => {
  const { name, details, timestamps } = req.body; // details is an array of { title, subtitle, description, image, locale_code }

  try {
    const newActor = await Actors.create({ name });

    const localeEntries = await Locales.findAll({
      where: { locale_code: details.map((detail) => detail.locale_code) },
    });

    const actorDetails = details.map((detail) => ({
      ...detail,
      actor_id: newActor.actor_id,
      locale_id: localeEntries.find(
        (locale) => locale.locale_code === detail.locale_code
      ).locale_id,
    }));

    await ActorDetails.bulkCreate(actorDetails);

    if (timestamps) {
      await ActorTimestamps.create({
        ...timestamps,
        actor_id: newActor.actor_id,
      });
    }

    res
      .status(201)
      .json({ message: 'Actor created successfully', actor: newActor });
  } catch (error) {
    console.error('Error adding actor:', error);
    res.status(500).json({ message: 'Failed to add actor' });
  }
});

// Update an actor and its details
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, details, timestamps } = req.body;

  try {
    const actor = await Actors.findByPk(id);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }

    await actor.update({ name });

    if (details && details.length > 0) {
      await ActorDetails.destroy({ where: { actor_id: id } });

      const localeEntries = await Locales.findAll({
        where: { locale_code: details.map((detail) => detail.locale_code) },
      });

      const actorDetails = details.map((detail) => ({
        ...detail,
        actor_id: id,
        locale_id: localeEntries.find(
          (locale) => locale.locale_code === detail.locale_code
        ).locale_id,
      }));

      await ActorDetails.bulkCreate(actorDetails);
    }

    if (timestamps) {
      await ActorTimestamps.upsert({
        ...timestamps,
        actor_id: id,
      });
    }

    res.status(200).json({ message: 'Actor updated successfully', actor });
  } catch (error) {
    console.error('Error updating actor:', error);
    res.status(500).json({ message: 'Failed to update actor' });
  }
});

// Delete an actor and its details
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await Actors.findByPk(id);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }

    await actor.destroy();

    res.status(200).json({ message: 'Actor deleted successfully' });
  } catch (error) {
    console.error('Error deleting actor:', error);
    res.status(500).json({ message: 'Failed to delete actor' });
  }
});

module.exports = router;
