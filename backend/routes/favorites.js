const express = require('express');
const router = express.Router();

// 模拟数据库
let favorites = [];

// 获取收藏列表
router.get('/', (req, res) => {
  res.json(favorites);
});

// 更新收藏状态
router.post('/', (req, res) => {
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

module.exports = router;
