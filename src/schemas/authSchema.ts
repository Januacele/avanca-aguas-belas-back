import Joi from "joi";

// eslint-disable-next-line no-useless-escape
const regexCPF = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

export const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  name: Joi.string().required(),
  cpf: Joi.string().required().pattern(regexCPF),
  secretary: Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
