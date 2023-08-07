const catchAsync = require('../utils/catchAsync');
const monsterService = require('../services/monster.service');
const httpStatus = require('http-status');
const { errorF, successF } = require('../utils/message');

const create = catchAsync(async (req, res, next) => {
  const monster = await monsterService.create(req.body);
  if (monster) {
    return successF('Monster created', monster, httpStatus.CREATED, res, next);
  }
  return errorF('Monster already exists', null, httpStatus.CONFLICT, res, next);
});

const findById = catchAsync(async (req, res, next) => {
  const monster = await monsterService.findById(req.params.id);
  if (monster) {
    return successF('Monster found', monster, httpStatus.OK, res, next);
  }
  return errorF('Monster not found', null, httpStatus.NOT_FOUND, res, next);
});

const findAll = catchAsync(async (req, res, next) => {
  const queries = req.query;
  const filter = Object.keys(queries)[0];
  const filterValue = Object.values(queries)[0];
  const monsters = await monsterService.findAll(filter, filterValue);
  if (monsters) {
    return successF('Monsters found', monsters, httpStatus.OK, res, next);
  }
  return errorF('Monsters not found', null, httpStatus.NOT_FOUND, res, next);
});

const update = catchAsync(async (req, res, next) => {
  const monster = await monsterService.update(req.params.id, req.body);
  if (monster) {
    return successF('Monster updated', monster, httpStatus.OK, res, next);
  }
  return errorF('Monster not found', null, httpStatus.NOT_FOUND, res, next);
});

const remove = catchAsync(async (req, res, next) => {
  const monster = await monsterService.remove(req.params.id);
  if (monster) {
    return successF('Monster deleted', monster, httpStatus.OK, res, next);
  }
  return errorF('Monster not found', null, httpStatus.NOT_FOUND, res, next);
});

module.exports = {
  create,
  findById,
  findAll,
  update,
  remove,
};
