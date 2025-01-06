const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ActorDetails = require('./ActorDetails');

const Locales = sequelize.define(
  'Locales',
  {
    locale_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    locale_code: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'locales',
    timestamps: false,
  }
);

// Associations
Locales.hasMany(ActorDetails, { foreignKey: 'locale_id', onDelete: 'CASCADE' });
ActorDetails.belongsTo(Locales, { foreignKey: 'locale_id' });

module.exports = Locales;
