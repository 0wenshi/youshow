const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EventTimestamps = sequelize.define(
  'EventTimestamps',
  {
    event_timestamp_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'event_id',
      },
      onDelete: 'CASCADE',
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'event_timestamps',
    timestamps: false, // Handled explicitly in columns
  }
);

module.exports = EventTimestamps;
