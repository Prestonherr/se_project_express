const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

const validateCreateItemBody = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string().required().min(2).max(30).messages({
        "string.min": 'The minimum length of the "name" field is 2',
        "string.max": 'The maximum length of the "name" field is 30',
        "string.empty": 'The "name" field must be filled in',
      }),
      imageUrl: Joi.string().required().custom(validateURL).messages({
        "string.empty": 'The "imageUrl" field must be filled in',
        "string.uri": 'the "imageUrl" field must be a valid url',
      }),
    })
    .unknown(true),
});

const validateCreateUserBody = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string().min(2).max(30).messages({
        "string.min": 'The minimum length of the "name" field is 2',
        "string.max": 'The maximum length of the "name" field is 30',
      }),
      avatar: Joi.string().required().custom(validateURL).messages({
        "string.empty": 'The "avatar" field must be filled in',
        "string.uri": 'the "avatar" field must be a valid url',
      }),
      email: Joi.string().required().email().messages({
        "string.email": 'the "email" field must be a valid email',
        "string.empty": 'The "email" field must be filled in',
      }),
      password: Joi.string().required().messages({
        "string.empty": 'The "password" field must be filled in',
      }),
    })
    .unknown(true),
});

const validateLoginBody = celebrate({
  body: Joi.object()
    .keys({
      email: Joi.string().required().email().messages({
        "string.email": 'the "email" field must be a valid email',
        "string.empty": 'The "email" field must be filled in',
      }),
      password: Joi.string().required().messages({
        "string.empty": 'The "password" field must be filled in',
      }),
    })
    .unknown(false),
});

const validateHexIdParam = (paramName) =>
  celebrate({
    params: Joi.object()
      .keys({
        [paramName]: Joi.string().hex().length(24).required(),
      })
      .unknown(false),
  });

const validateItemIdParam = validateHexIdParam("itemId");
const validateUserIdParam = validateHexIdParam("userId");
const validateId = validateHexIdParam("id");

module.exports = {
  validateCreateItemBody,
  validateCreateUserBody,
  validateLoginBody,
  validateItemIdParam,
  validateUserIdParam,
  validateId,
};
