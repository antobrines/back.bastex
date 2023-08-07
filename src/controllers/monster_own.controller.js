const catchAsync = require('../utils/catchAsync');
const monsterOwnService = require('../services/monster_own.service');
const userService = require('../services/user.service');
const httpStatus = require('http-status');
const { errorF, successF } = require('../utils/message');

const create = catchAsync(async (req, res, next) => {
    const monsterOwn = await monsterOwnService.create(req.body);
    if (monsterOwn) {
        userService.addMonster('64cbc3c91139d54d3e2e46ed', monsterOwn._id);
        return successF('MonsterOwn created', monsterOwn, httpStatus.CREATED, res, next);
    }
    return errorF('MonsterOwn already exists', null, httpStatus.CONFLICT, res, next);
    }
);

module.exports = {
    create
};
