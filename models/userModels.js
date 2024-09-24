const mongoose = require('mongoose');

// Define the schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,   // Correctly defining the type as String
    required: true,
  },
  email: {
    type: String,   // Correctly defining the type as String
    required: true,
    unique: true,
  },
  password: {
    type: String,   // Correctly defining the type as String
    required: true,
  },
}, {
  timestamps: true,
});

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
