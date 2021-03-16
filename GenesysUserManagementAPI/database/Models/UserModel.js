const mongoose = require('mongoose');

// Schema for user objects
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastLogin: Date
});

module.exports = mongoose.model('User', userSchema);