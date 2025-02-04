const jwt = require('jsonwebtoken');

// Middleware to verify any logged-in user
const verifyUser = (req, res, next) => {
  // Get token from Authorization header OR cookies
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request object
    req.user = decoded; // Now req.user contains { id, email, role, ... }
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

// Middleware to verify admin users
const verifyAdmin = (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access only' });
    }
    next();
  });
};

module.exports = { verifyUser, verifyAdmin };
