const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Events = sequelize.define(
  'Event',
  {
    event_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'events',
    timestamps: false, // Handled in event_timestamps table
  }
);

module.exports = Events;
