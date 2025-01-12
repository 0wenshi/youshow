// Initiate all models
const ActorDetails = require('./ActorDetails');
const Locales = require('./Locales');
const ActorTimestamps = require('./ActorTimestamps');
const sequelize = require('../config/db');
const Actors = require('./Actors');
const Events = require('./Events');
const ActorsEvents = require('./ActorsEvents');

// Sync models
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
});

Actors.belongsToMany(Events, {
  through: ActorsEvents,
  foreignKey: 'actor_id',
  otherKey: 'event_id',
});

Events.belongsToMany(Actors, {
  through: ActorsEvents,
  foreignKey: 'event_id',
  otherKey: 'actor_id',
});

module.exports = {
  sequelize,
  Actors,
  Events,
  ActorsEvents,
  ActorDetails,
  Locales,
  ActorTimestamps,
};
