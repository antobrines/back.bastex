const Joi = require('joi');

module.exports = {
    body: joi.object().keys({
        name: joi.string().required(),
        awekeningName: joi.string().required(),
        element: joi.string().required(),
        type: joi.string().required(),
        baseStars: joi.number().required(),
        image: joi.string().required(),
    }),
};