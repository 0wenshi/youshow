const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ticket = sequelize.define(
  'Ticket',
  {
    ticket_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => `ORDER-${Date.now()}`,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'ticket',
    timestamps: false,
  }
);

module.exports = Ticket;
