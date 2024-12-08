const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET_KEY = 'your_jwt_secret_key';

// 模拟数据库
const users = [];

// 注册
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Request body:', req.body); // 打印请求体

  // 检查用户名或邮箱是否已存在
  const existingUser = users.find(
    (user) => user.username === username || user.email === email
  );
  if (existingUser) {
    return res.status(400).json({ message: 'User or email already exists' });
  }

  // 验证密码
  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  // 哈希密码并保存用户
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// 登录
router.post('/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  // 检查用户名或邮箱是否存在
  const user = users.find(
    (user) => user.username === usernameOrEmail || user.email === usernameOrEmail
  );
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // 检查密码是否正确
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // 生成 JWT token
  const token = jwt.sign(
    { username: user.username, email: user.email },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
  res.status(200).json({ message: 'Login successful', token });
});

module.exports = router;
