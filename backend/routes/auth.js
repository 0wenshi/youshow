const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET_KEY = 'your_jwt_secret_key';

// 模拟数据库
const users = [];

// 注册
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // 检查用户是否已存在
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // 哈希密码并保存用户
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// 登录
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // 检查用户是否存在
    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // 检查密码是否正确
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // 生成 JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
});

module.exports = router;
