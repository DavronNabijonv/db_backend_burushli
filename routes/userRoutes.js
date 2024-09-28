const express = require('express');
const User = require('../models/userModels');
const { loginUser } = require('../controllers/userControllers');
const bcrypt = require('bcryptjs');

const router = express.Router(); 

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      //Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new User({ name, email, password:hashPassword });
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      // Capture full error and log it
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user', error: error.message || error });
    }
  });
  

router.post('/login',loginUser);

module.exports = router;