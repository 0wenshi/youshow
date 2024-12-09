const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const favoritesRoutes = require('./routes/favorites'); 

const app = express();
const port = process.env.PORT;
const sequelize = require('./config/db');
const User = require('./modles/User');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');
    await sequelize.sync({ alter: true }); // 同步模型到数据库
    console.log('Models synchronized.');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
})();

// 允许跨域
app.use(cors());
app.use(bodyParser.json());

// 路由挂载
app.use('/auth', authRoutes);
app.use('/favorites', favoritesRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
