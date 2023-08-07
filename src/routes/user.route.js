const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const config = require('../config');
const passport = require('passport');

router.get('/discord', passport.authenticate('discord'), (req, res) => {});

router.get(
  '/discord/callback',
  passport.authenticate('discord', { failureRedirect: '/', session: true }),
  (req, res) => {
    res.send(req.user);
    // res.redirect(config.urlFront + 'user/info');
  }
);

router.get('/discord/me', userController.me);
router.get('/:id/monsters', userController.monsters);
router.get('/monsters', userController.monsters);
router.post('/info', (req, res) => {
  const {power, summoner, monsters} = req.body;
  console.log(power, summoner, monsters);
  res.send('POST request to the homepage');
});


module.exports = router;