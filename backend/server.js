const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const actorRoutes = require('./routes/actors');
const usersRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./config/db');

// Database Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL database.');
    await sequelize.sync({ alter: true }); // Synchronize models
    console.log('Models synchronized with PostgreSQL.');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL:', err.message);
    process.exit(1); // Exit with error
  }
})();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow the React app to connect
    credentials: true, // Allow cookies to be sent from the React app
  })
);
app.use(bodyParser.json()); // Parse JSON from the request body
app.use(bodyParser.urlencoded({ extended: true })); // Allow URLEncoded data
app.use(cookieParser()); // Parse cookies

// Serve static files from the `dist` folder (React frontend)
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/actors', actorRoutes);
app.use('/users', usersRoutes);

// Catch-all route to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
