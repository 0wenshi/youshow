// Import all models
const ActorDetails = require('./ActorDetails');
const Actors = require('./Actors');
const ActorsEvents = require('./ActorsEvents');
const ActorTimestamps = require('./ActorTimestamps');
const EventDetails = require('./EventDetails');
const Events = require('./Events');
const EventTimestamps = require('./EventTimestamps');
const Locales = require('./Locales');
const User = require('./User');
const sequelize = require('../config/db');
const Ticket = require('./Ticket');

// Define relationships between models
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
  foreignKey: 'event_id',
  as: 'details', // Foreign key in EventDetails pointing to Events
  onDelete: 'CASCADE', // Delete EventDetails when the parent Event is deleted
});
EventDetails.belongsTo(Events, {
  foreignKey: 'event_id', // Foreign key in EventDetails pointing to Events
  as: 'event',
});

// One-to-One: Events -> EventTimestamps
Events.hasOne(EventTimestamps, {
  foreignKey: 'event_id',
  as: 'timestamps',
  onDelete: 'CASCADE',
});
EventTimestamps.belongsTo(Events, {
  foreignKey: 'event_id',
  as: 'event',
});

// One-to-Many: Locales -> EventDetails
Locales.hasMany(EventDetails, {
  foreignKey: 'locale_id', // Foreign key in EventDetails pointing to Locales
  onDelete: 'CASCADE', // Delete EventDetails when the parent Locale is deleted
});
EventDetails.belongsTo(Locales, {
  foreignKey: 'locale_id', // Foreign key in EventDetails pointing to Locales
});

User.hasMany(Ticket, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Events.hasMany(Ticket, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE',
});

Ticket.belongsTo(User, {
  foreignKey: 'user_id',
});

Ticket.belongsTo(Events, {
  foreignKey: 'event_id',
});

// Sync models with the database
sequelize
  .sync()
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
  ActorDetails,
  Actors,
  ActorsEvents,
  ActorTimestamps,
  EventDetails,
  Events,
  EventTimestamps,
  Locales,
  Ticket,
  User,
};
