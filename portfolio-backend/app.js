const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import JWT

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Secret key for signing JWT
const SECRET_KEY = '67969297'; // Replace with an environment variable in production

// Login credentials
const validCredentials = {
  username: 'adminUser',
  password: 'adminPass123',
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validCredentials.username && password === validCredentials.password) {
    // Generate a token with a 12-hour expiration
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '12h' });
    res.status(200).json({ success: true, token, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to request object
    next(); // Proceed to the next middleware or route
  } catch (err) {
    res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
};

// Protected route example
app.get('/homepage', authenticate, (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to the homepage!' });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
