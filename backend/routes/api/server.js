const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// 允许跨域
app.use(cors());
app.use(bodyParser.json());

// 模拟数据库
let favorites = [];

// 获取收藏列表
app.get('/favorites', (req, res) => {
  res.json(favorites);
});

// 更新收藏状态
app.post('/favorites', (req, res) => {
  const { id, isFavorited } = req.body;
  if (isFavorited) {
    // 添加到收藏
    if (!favorites.includes(id)) {
      favorites.push(id);
    }
  } else {
    // 从收藏中移除
    favorites = favorites.filter((favId) => favId !== id);
  }
  res.json({ success: true, favorites });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
