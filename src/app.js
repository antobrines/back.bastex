const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const httpStatus = require('http-status');
const app = express();
const {
  errorF
} = require('./utils/message');
const routes = require('./routes');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
require('./strategies/discord');
app.use(
  cors({
    credentials: true,
    secure: true,
    origin: true,
  })
);

app.use(cookieParser());
// app.set('trust proxy', 1);
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000000000000,
      sameSite: 'none',
      secure: true,
    },
    proxy: true,
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://kemonas:RfiS8aw3jV7yU5uc@wyvria.ivfhtin.mongodb.net/sessions',
      ttl: 600000000000000,
    }),
  })
);
app.use(passport.initialize({ name: 'discord' }));
app.use(passport.session());

app.set('trust proxy', 1);
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    errorF(error.message, error, 500, res, next);
  } else {
    next();
  }
});

app.use('/api', routes);

// Routes to test the API
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄👨‍🔧🐱‍🚀✌'
  });
});

// Error handling not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND);
  const errorMessage = {
    message: `🔍 - Not Found - ${req.originalUrl}`
  };
  res.json(errorMessage);
  next();
});

module.exports = app;