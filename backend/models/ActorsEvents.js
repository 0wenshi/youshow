const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ActorsEvents = sequelize.define(
  'ActorsEvents',
  {
    actor_event_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'actors', // Name of the referenced table
        key: 'actor_id', // Primary key in the referenced table
      },
      onDelete: 'CASCADE',
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events', // Name of the referenced table
        key: 'event_id', // Primary key in the referenced table
      },
      onDelete: 'CASCADE',
    },
  },
  {
    tableName: 'actors_events',
    timestamps: false,
  }
);

module.exports = ActorsEvents;
