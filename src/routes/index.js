/* eslint-disable indent */
const express = require('express');
const authRoute = require('./user.route');
const monsterRoute = require('./monster.route');
const monsterOwnRoute = require('./monster_own.route');
const router = express.Router();

const defaultRoutes = [{
  path: '/user',
  route: authRoute,
}, {
  path: '/monsters',
  route: monsterRoute,
}, {
  path: '/monster-owns',
  route: monsterOwnRoute,
}];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;