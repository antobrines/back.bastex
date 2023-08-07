const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const runeSchema = mongoose.Schema({
    type: {
        type: types.String,
        required: true,
        enum: ['energy', 'fatal', 'blade', 'rage', 'swift', 'focus', 'guard', 'violent', 'despair'],        
    },
    stars: {
        type: types.Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6],
    },
    lvl: {
        type: types.Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    mainStat: {
        type: types.String,
        required: true,
        enum: ['hp', 'atk', 'def', 'spd', 'cr', 'cd', 'res', 'acc'],
    },
    mainStatValue: {
        type: types.Number,
        required: true,
    },
    slot: {
        type: types.Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6],
    },
    subStats: [{
        type: types.String,
        required: false,
        enum: ['hp', 'atk', 'def', 'spd', 'cr', 'cd', 'res', 'acc'],
    }],
    subStatsValues: [{
        type: types.Number,
        required: false,
    }],
    quality: {
        type: types.String,
        required: true,
        enum: ['normal', 'magic', 'rare', 'hero', 'legend'],
    },
});

const Rune = mongoose.model('Rune', runeSchema);
module.exports = Rune;
