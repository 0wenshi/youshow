const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
const port = process.env.PORT;
const sequelize = require('./config/db');
const User = require('./models/User');
const Event = require('./models/Events');

// Connect to database and synchronize models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
    await sequelize.sync({ alter: true }); // Synchronize the model to the database
    console.log('Models synchronized.');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
})();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "dist" directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Route mounting
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

// Handle React routing, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
