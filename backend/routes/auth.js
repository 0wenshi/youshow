const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const User = require('../models/User');
const cookieParser = require('cookie-parser');
const { verifyAdmin } = require('../middlewares/authenticate');
require('dotenv').config(); // Load environment variables

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || 'fallback_default_key'; // Use env or fallback

// Use cookie parser middleware
router.use(cookieParser());

// Register route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if all fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check whether the username or email address already exists
    const existingUser = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: 'Username or email already exists' });
    }

    // Hash the password and save the user
    const hashedPassword = await bcrypt.hash(password, 12); // Use 12 salt rounds
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { identifier, password } = req.body;

  console.log('Request body:', req.body);

  try {
    // Check if all fields are provided
    if (!identifier || !password) {
      return res
        .status(400)
        .json({ message: 'Identifier and password are required' });
    }

    // Find user by username or email
    const user = await User.findOne({
      where: {
        [Sequelize.Op.or]: [{ username: identifier }, { email: identifier }],
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    console.log('Generated JWT:', token);

    // Set the JWT in an HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true, // Prevents client-side JavaScript from reading the cookie
      secure: process.env.NODE_ENV === 'production', // Ensures the browser only sends the cookie over HTTPS
      sameSite: 'strict', // CSRF protection
      maxAge: 3600000, // 1 hour
    });

    // Send the token and user info
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout route to clear the cookie
router.post('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the cookie
  res.status(200).json({ message: 'Logout successful' });
});

// Get user route
router.get('/user', async (req, res) => {
  console.log('Cookies:', req.cookies); // Log all cookies

  const token = req.cookies.token; // Read the token from cookies
  if (!token) {
    console.warn('Token is missing');
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verify the token
    console.log('Decoded token:', decoded); // Log decoded token

    const user = await User.findByPk(decoded.id); // Fetch the user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
});

router.get('/admin-dashboard', verifyAdmin, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

router.post('/manage-users', verifyAdmin, (req, res) => {
  // Perform admin actions like managing users
  res.status(200).json({ message: 'User management actions completed' });
});

module.exports = router;
