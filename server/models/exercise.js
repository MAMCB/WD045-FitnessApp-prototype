const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    muscleGroup: {type: String, required: true},
    equipment: {type: String, required: true},
    difficulty: {type: String, required: true},
    image: {type: String},
    createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
}, {timestamps: true});

module.exports = mongoose.model('Exercise', exerciseSchema);