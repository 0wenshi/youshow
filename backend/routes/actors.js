const express = require('express');
const Actors = require('../models/Actors');

const router = express.Router();

// Get all actors
router.get('/', async (req, res) => {
  try {
    const actors = await Actors.findAll();
    res.status(200).json(actors);
  } catch (error) {
    console.error('Error fectching actors:', error);
    res.status(500).json({ message: 'Failed to fetch actors' });
  }
});

// Get actors by locale
router.get('/actors', async (req, res) => {
  const { locale } = req.query;

  try {
    const whereCondition = locale ? { locale } : {};

    const actors = await Actors.findAll({ where: whereCondition });

    res.status(200).json(actors);
  } catch (error) {
    console.error('Error fetching actors:', error);
    res.status(500).json({ message: 'Failed to fetch actors' });
  }
});

// Add a new actor
router.post('/', async (req, res) => {
  const { title, subtitle, description, image } = req.body; // Assuming the request body contains the required fields

  try {
    const newActor = await Actors.create({
      title,
      subtitle,
      description,
      image,
    });
    res.status(201).json(newActor);
  } catch (error) {
    console.error('Error adding actors:', error);
    res.status(500).json({ message: 'Failed to add actor' });
  }
});

// Update an actor
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, description, image } = req.body; // Assuming the request body contains the required fields

  try {
    const actor = await Actors.findByPk(id);
    if (!actor) {
      return res.status(404).json({ message: 'Actors not found' });
    }

    await actor.update({ title, subtitle, description, image });
    res.status(200).json({ message: 'Actor updated successfully', actor });
  } catch (error) {
    console.error('Error updating actor:', error);
    res.status(500).json({ message: 'Failed to update actor' });
  }
});

// Delete an actor
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const actor = await Actors.findByPk(id);
    if (!actor) {
      return res.status(404).json({ message: 'Actors not found' });
    }

    await actor.destroy();
    res.status(200).json({ message: 'Actor deleted successfully' });
  } catch (error) {
    console.error('Error deleting actor:', error);
    res.status(500).json({ message: 'Failed to delete actor' });
  }
});

module.exports = router;