const {
    Monster
} = require('../models');

const create = async (monsterBody) => {
    return Monster.create(monsterBody);
}

const findById = async (id) => {
    const monster = await Monster.findOne({
        _id: id
    });
    return monster;
}

const findAll = async (filter = null, filterValue= null) => {
    if (filter === null) {
        return await Monster.find();
    }
    return await Monster.find({
        [filter]: filterValue
    });
}

const update = async (id, monsterBody) => {
    const monster = await Monster.findOne({
        _id: id
    });
    if (monster) {
        return await Monster.updateOne({
            _id: id
        }, monsterBody);
    }
    return null;
}

const remove = async (id) => {
    const monster = await Monster.findOne({
        _id: id
    });
    if (monster) {
        return await Monster.deleteOne({
            _id: id
        });
    }
    return null;
}

module.exports = {
    create,
    findById,
    findAll,
    update,
    remove
};


