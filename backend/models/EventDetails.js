const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const EventDetails = sequelize.define(
  'EventDetails',
  {
    event_details_id: {
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
    locale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'locale_id',
      },
      onDelete: 'CASCADE',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'event_details',
    timestamps: false,
  }
);

module.exports = EventDetails;
