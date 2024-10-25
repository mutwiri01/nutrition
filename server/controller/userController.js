const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new regular user
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with `isAdmin` set to false by default
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isAdmin: false,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Register a new admin (restricted)
exports.registerAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the requester is an admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with `isAdmin` set to true
    const newAdmin = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      isAdmin: true,
    });

    const savedAdmin = await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully', user: savedAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
