const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')).required(),
  phone: Joi.string().required(),
})

const putContactSchema = Joi.object({
  name: Joi.string().alphanum(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')),
  phone: Joi.string(),
})

module.exports = {
    addContactSchema,
    putContactSchema,
}