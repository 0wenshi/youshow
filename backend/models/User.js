const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: 'user_role_enum',
      allowNull: false,
      defaultValue: 'user', // Default role is user
    },
    membership_level: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Regular',
    },
    membership_expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25,
      validate: {
        min: 25,
        max: 100,
      },
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  }
);

module.exports = User;
