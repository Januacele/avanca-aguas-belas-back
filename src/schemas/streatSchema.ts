import Joi from "joi";


export const districtNameSchema = Joi.object({
  streatName: Joi.string().required(),
  districtId: Joi.number().required()
});