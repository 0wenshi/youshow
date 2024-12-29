const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_URL, // PostgreSQL connection string provided by Render
  {
    dialect: 'postgres',
    protocol: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL successfully!');
  })
  .catch((error) => {
    console.error('Unable to connect to the PostgreSQL database:', error);
  });

module.exports = sequelize;
