const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  db: {
    url: process.env.DB_URL,
  },
  version: process.env.VERSION,
  environment: process.env.NODE_ENV,
  url: process.env.URL,
  urlFront: process.env.URL_FRONT,
  token: {
    secret: process.env.TOKEN_SECRET,
    expire: process.env.TOKEN_EXPIRE,
  },
  discord: {
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: process.env.DISCORD_SCOPE,
  },
};