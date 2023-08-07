const express = require('express');
const router = express.Router();
const monsterOwnController = require('../controllers/monster_own.controller');

router.post('/', monsterOwnController.create);

module.exports = router;