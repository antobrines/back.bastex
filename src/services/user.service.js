const {
  User
} = require('../models');
const config = require('../config');

const create = async (userBody) => {
  const user = await User.findOne({
    discordId: userBody.discordId
  });
  if (user) {
    return user;
  }
  return User.create(userBody);
};

const findById = async (id) => {
  const user = await User.findOne({
    _id: id
  });
  return user;
};

const findByIdWithMonsters = async (id, filter = null, filterValue = null) => {
  console.log(id, filter, filterValue);
  const user = await User.findOne({
    _id: id
  }).populate({
    path: 'monsters',
    populate: {
      path: 'monsterId',
    },
    match: {
      [filter]: filterValue
    }
  });
  return user;
};

const addMonster = async (id, monsterId) => {
  const user = await User.findOne({
    _id: id
  });
  if (user) {
    user.monsters.push(monsterId);
    return await User.updateOne({
      _id: id
    }, user);
  }
  return null;
};


module.exports = {
  create,
  findById,
  findByIdWithMonsters,
  addMonster
};