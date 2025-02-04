const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyUser } = require('../middlewares/authenticate');

// Get user level details (Only for logged-in users)
router.get('/level', verifyUser, async (req, res) => {
  try {
    // 🔹 Get the user ID from the request object
    const userId = req.user.id; // Get the user ID from the request object
    console.log('req.user:', req.user);

    if (!userId) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: No user ID found' });
    }
    console.log(`Fetching membership details for user ID: ${userId}`);

    // 🔹 Fetch the user by ID
    const user = await User.findByPk(userId, {
      attributes: ['membership_level', 'membership_expiry', 'progress'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const formattedExpiryDate = user.membership_expiry
      ? user.membership_expiry.toISOString().split('T')[0]
      : null;

    // return user level details
    res.json({
      currentLevel: user.membership_level,
      expiryDate: formattedExpiryDate, // Format date as YYYY-MM-DD
      progress: user.progress,
    });
  } catch (error) {
    console.error('Error fetching user level:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
