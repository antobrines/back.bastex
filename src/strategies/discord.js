const passport = require('passport');
const { Strategy } = require('passport-discord');
const userService = require('../services/user.service');
const config = require('../config');

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        done(null, await userService.findById(id));
    } catch (error) {
        console.log(error);
        done(error);
    }
});

passport.use(new Strategy({
    clientID: config.discord.clientID,
    clientSecret: config.discord.clientSecret,
    callbackURL: config.discord.callbackURL,
    scope: ['identify'],
    name: 'discord'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await userService.create({
            discordId: profile.id,
            username: profile.username,
            avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
        });
        return done(null, user);
    } catch (error) {
        return done(error);
    }
    
}));

