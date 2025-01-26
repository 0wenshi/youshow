// Export middleware to verify user is an admin
const jwt = require('jsonwebtoken');

// Middleware to verify user is an admin
const verifyAdmin = (req, res, next) => {
  // Extract token from cookies
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode token

    // Check if user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access only' });
    }

    // Attach user info to request object
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = { verifyAdmin };
