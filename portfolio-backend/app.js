const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Hardcoded login credentials
const validCredentials = {
  username: 'adminUser',
  password: 'adminPass123',
};

// Login route
app.post('/login', (req, res) => {
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
