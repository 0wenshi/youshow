// Import all models
const ActorDetails = require('./ActorDetails');
const Locales = require('./Locales');
const ActorTimestamps = require('./ActorTimestamps');
const sequelize = require('../config/db');
const Actors = require('./Actors');
const ActorsEvents = require('./ActorsEvents');
const Events = require('./Events');
const EventDetails = require('./EventDetails');
const EventTimestamps = require('./EventTimestamps');

// Define relationships

// Many-to-Many: Actors <-> Events through ActorsEvents
Actors.belongsToMany(Events, {
  through: ActorsEvents, // Join table
  foreignKey: 'actor_id', // Foreign key in ActorsEvents pointing to Actors
  otherKey: 'event_id', // Foreign key in ActorsEvents pointing to Events
});

Events.belongsToMany(Actors, {
  through: ActorsEvents, // Join table
  foreignKey: 'event_id', // Foreign key in ActorsEvents pointing to Events
  otherKey: 'actor_id', // Foreign key in ActorsEvents pointing to Actors
});

// One-to-Many: Events -> EventDetails
Events.hasMany(EventDetails, {
  foreignKey: 'event_id', // Foreign key in EventDetails pointing to Events
  onDelete: 'CASCADE', // Delete EventDetails when the parent Event is deleted
});
EventDetails.belongsTo(Events, {
  foreignKey: 'event_id', // Foreign key in EventDetails pointing to Events
});

// One-to-One: Events -> EventTimestamps
Events.hasOne(EventTimestamps, {
  foreignKey: 'event_id', // Foreign key in EventTimestamps pointing to Events
  onDelete: 'CASCADE', // Delete EventTimestamps when the parent Event is deleted
});
EventTimestamps.belongsTo(Events, {
  foreignKey: 'event_id', // Foreign key in EventTimestamps pointing to Events
});

// One-to-Many: Locales -> EventDetails
Locales.hasMany(EventDetails, {
  foreignKey: 'locale_id', // Foreign key in EventDetails pointing to Locales
  onDelete: 'CASCADE', // Delete EventDetails when the parent Locale is deleted
});
EventDetails.belongsTo(Locales, {
  foreignKey: 'locale_id', // Foreign key in EventDetails pointing to Locales
});

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((error) => {
    console.error('Failed to connect to PostgreSQL database:', error.message);
    console.error('Error details:', error);
  });

// Export all models
module.exports = {
  sequelize,
  Actors,
  Events,
  EventDetails,
  EventTimestamps,
  ActorsEvents,
  ActorDetails,
  Locales,
  ActorTimestamps,
};
