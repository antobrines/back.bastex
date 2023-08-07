const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
  discordId: {
    type: types.String,
    required: true,
  },
  username: {
    type: types.String,
    required: true,
  },
  avatar: {
    type: types.String,
    required: true,
  },
  monsters: [{
    type: types.ObjectId,
    ref: 'MonsterOwn',
  }],
  createdAt: {
    type: types.Date,
    required: true,
    default: Date.now,
  },
  power: {
    type: types.Number,
    required: true,
    default: 0,
  },
  summoner: {
    type: types.String,
    required: false,
    enum: ['Cleaf', 'Kina', 'Orbia', 'Soleta'],
  },
  guild: {
    type: types.ObjectId,
    required: true,
    ref: 'Guild',
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;