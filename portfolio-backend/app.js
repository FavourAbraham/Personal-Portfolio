const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use built-in JSON parser

// Login credentials
const validCredentials = {
  username: 'adminUser',
  password: 'adminPass123',
};

// Login route
app.post('/login', (req, res) => {
  console.log('Request Body:', req.body); // Debugging
  const { username, password } = req.body;

  if (username === validCredentials.username && password === validCredentials.password) {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
