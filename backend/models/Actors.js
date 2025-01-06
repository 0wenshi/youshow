const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ActorDetails = require('./ActorDetails');
const ActorTimestamps = require('./ActorTimestamps');

const Actors = sequelize.define(
  'Actors',
  {
    actor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'actors',
    timestamps: false,
  }
);

// Associations
Actors.hasMany(ActorDetails, { foreignKey: 'actor_id', onDelete: 'CASCADE' });
ActorDetails.belongsTo(Actors, { foreignKey: 'actor_id' });

Actors.hasOne(ActorTimestamps, { foreignKey: 'actor_id', onDelete: 'CASCADE' });
ActorTimestamps.belongsTo(Actors, { foreignKey: 'actor_id' });

module.exports = Actors;
