const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')).required(),
  phone: Joi.string().required(),
})

const putContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$')),
  phone: Joi.string(),
})

const patchContactFavorite = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = {
  addContactSchema,
  putContactSchema,
  patchContactFavorite,
}