const express = require('express');
const bcrypt = require('bcrypt');
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
      password,
      isAdmin: isAdmin || false, // Default to false if isAdmin is not provided
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

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

    // Check for user existence
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
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
