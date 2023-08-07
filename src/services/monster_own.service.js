const {
    MonsterOwn
} = require('../models');

const create = async (monsterOwnBody) => {
    return MonsterOwn.create(monsterOwnBody);
}

const findById = async (id) => {
    const monsterOwn = await MonsterOwn.findOne({
        _id: id
    });
    return monsterOwn;
}

const update = async (id, monsterOwnBody) => {
    const monsterOwn = await MonsterOwn.findOne({
        _id: id
    });
    if (monsterOwn) {
        return await MonsterOwn.updateOne({
            _id: id
        }, monsterOwnBody);
    }
    return null;
}


module.exports = {
    create,
    findById,
    update
};