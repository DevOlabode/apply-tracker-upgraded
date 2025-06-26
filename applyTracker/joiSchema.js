const Joi = require('joi');

module.exports.applySchema = Joi.object({
    company : Joi.string().required(),
    position : Joi.string().required(),
    status : Joi.string().required(),
    appliedDate : Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
    interviewDate : Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/),
    notes : Joi.string(),
})