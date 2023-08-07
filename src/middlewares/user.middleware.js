const httpStatus = require('http-status');
const {
  errorF
} = require('../utils/message');
const config = require('../config');
const jwt = require('jsonwebtoken');
const constant = require('../config/constant');
const userError = constant.user.error;

const isConnected = async (req, res, next) => {
  const {
    authHeader
  } = req.headers;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.token.secret, (error, user) => {
      if (error) {
        return errorF(userError.notConnected, error, httpStatus.UNAUTHORIZED, res, next);
      }
      req.user = user;
      return next();
    });
  }

  const error = new Error(userError.missingToken);
  return errorF(error.message, error, httpStatus.UNAUTHORIZED, res, next);

};

module.exports = {
  isConnected
};