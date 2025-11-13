require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

const createAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/photobooth-cms');
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@photoboothcanada.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const adminUser = await User.create({
      email: 'admin@photoboothcanada.com',
      password: 'Admin123!', // Change this in production
      role: 'admin'
    });

    console.log('Admin user created successfully:');
    console.log('Email:', adminUser.email);
    console.log('Role:', adminUser.role);
    console.log('Please change the default password after first login!');

  } catch (error) {
    console.error('Error creating admin user:', error.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

createAdminUser();
