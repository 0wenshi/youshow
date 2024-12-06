const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
