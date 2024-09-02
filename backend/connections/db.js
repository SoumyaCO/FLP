const mongoose = require('mongoose');


const connectDB = (/** @type {string} */ uri) => {
    try {
        console.log("MongoDB connected successfully");
        return mongoose.connect(uri);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
