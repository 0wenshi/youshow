const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const favoritesRoutes = require('./routes/favorites'); // 引入收藏路由

const app = express();
const port = process.env.PORT;

// 允许跨域
app.use(cors());
app.use(bodyParser.json());

// 路由挂载
app.use('/auth', authRoutes);
app.use('/favorites', favoritesRoutes); // 挂载收藏功能路由

// 启动服务
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
