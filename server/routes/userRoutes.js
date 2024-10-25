const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const authAdminMiddleware = require('../middleware/authAdminMiddleware');

// Register a new user (Admin or regular user)
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    // Create new user with isAdmin field
    user = new User({
      firstName,
      lastName,
      email,
      isAdmin: isAdmin || false, // Default to false if isAdmin is not provided
    });

    // Hash password
    user.password = await argon2.hash(password);

    // Save user to database
    await user.save();

    // Create JWT
    const payload = { user: { id: user.id, isAdmin: user.isAdmin } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Compare password
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Create JWT
    const payload = { user: { id: user.id, isAdmin: user.isAdmin } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Admin-only route (requires authentication and admin privileges)
router.get('/dashboard', authAdminMiddleware, (req, res) => {
  res.json({ msg: 'Welcome to the admin dashboard' });
});

module.exports = router;
