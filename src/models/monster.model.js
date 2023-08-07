const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const monsterSchema = mongoose.Schema({
    name: {
        type: types.String,
        required: true,
    },
    awekeningName: {
        type: types.String,
        required: true,
    },
    element: {
        type: types.String,
        required: true,
        enum: ['fire', 'water', 'wind', 'light', 'dark']
    },
    type: {
        type: types.String,
        required: true,
        enum: ['mage', 'support', 'knight', 'warrior', 'assassin', 'archer']
    },
    baseStars: {
        type: types.Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    image: {
        type: types.String,
        required: true,
    },
    createdAt: {
        type: types.Date,
        required: true,
        default: Date.now,
    },
});

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;