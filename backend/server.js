const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const actorRoutes = require('./routes/actors');

const app = express();
const port = process.env.PORT;
const sequelize = require('./config/db');

// Database Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL database.');
    await sequelize.sync({ alter: true }); // Synchronize models
    console.log('Models synchronized with PostgreSQL.');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL database:', err.message);
  }
})();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/actors', actorRoutes);

// Catch-all route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
