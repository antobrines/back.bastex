const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const monsterOwnSchema = mongoose.Schema({
    monsterId: {
        type: types.ObjectId,
        required: true,
        ref: 'Monster',
    },
    isPrincipal: {
        type: types.Boolean,
        required: true,
        default: false,
    },
    lvl: {
        type: types.Number,
        required: true,
        default: 1,
    },
    awake: {
        type: types.Boolean,
        required: true,
        default: false,
    },
    power: {
        type: types.Number,
        required: false,
    },
    stars: {
        type: types.Number,
        required: false,
    },
    skillUp: {
        type: types.Boolean,
        required: true,
        default: false,
    },
    runes: [{
        type: types.ObjectId,
        ref: 'Rune',
    }],
    createdAt: {
        type: types.Date,
        required: true,
        default: Date.now,
    },
});

const MonsterOwn = mongoose.model('MonsterOwn', monsterOwnSchema);

module.exports = MonsterOwn;