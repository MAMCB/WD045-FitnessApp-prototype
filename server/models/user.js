const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    profilePicUrl: {type: String},
    isActive: {type: Boolean, default: true}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);