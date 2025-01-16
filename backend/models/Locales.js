const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ActorDetails = require('./ActorDetails');
const EventDetails = require('./EventDetails');

// Locales model
const Locales = sequelize.define(
  'Locales',
  {
    locale_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    locale_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'locales',
    timestamps: false, // No timestamps in the table
  }
);

// Associations
Locales.hasMany(ActorDetails, {
  foreignKey: 'locale_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE', // Ensures updates cascade properly
});
ActorDetails.belongsTo(Locales, {
  foreignKey: 'locale_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Locales.hasMany(EventDetails, {
  foreignKey: 'locale_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
EventDetails.belongsTo(Locales, {
  foreignKey: 'locale_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = Locales;
