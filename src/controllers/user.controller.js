const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user.service');
const httpStatus = require('http-status');
const { errorF, successF } = require('../utils/message');

const me = catchAsync(async (req, res, next) => {
  const user = req.user;
  return successF('moi', user, httpStatus.OK, res, next);
});

const monsters = catchAsync(async (req, res, next) => {
  const queries = req.query;
  const filter = Object.keys(queries)[0];
  const filterValue = Object.values(queries)[0];
  if (req.user == null) {
    const user = await userService.findByIdWithMonsters(req.params.id, filter, filterValue);
    if (user) {
      return successF(
        'Monsters found',
        user.monsters,
        httpStatus.OK,
        res,
        next
      );
    }
  } else {
    const user = await userService.findByIdWithMonsters(req.user._id, filter, filterValue);
    if (user) {
      return successF(
        'Monsters found',
        user.monsters,
        httpStatus.OK,
        res,
        next
      );
    }
  }
  return successF('Monsters found', null, httpStatus.OK, res, next);
});

module.exports = {
  me,
  monsters,
};
