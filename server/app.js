// server.js (or app.js)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const userRoutes = require('./routes/userRoutes'); // Combined routes for auth and admin
const formRoutes = require('./routes/formRoutes'); // New form routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use('/api/users', userRoutes); // Single route for both auth and admin
app.use('/api/forms', formRoutes); // Route for form submissions

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
