const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ActorTimestamps = sequelize.define(
  'ActorTimestamps',
  {
    actor_timestamp_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'actors',
        key: 'actor_id',
      },
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: 'actor_timestamps',
    timestamps: false,
  }
);

module.exports = ActorTimestamps;
