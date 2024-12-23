const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
const port = process.env.PORT;
const sequelize = require('./config/db');
const User = require('./models/User');
const Event = require('./models/Events');

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

// Allow cross-domain
app.use(cors());
app.use(bodyParser.json());

// Route mounting
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
