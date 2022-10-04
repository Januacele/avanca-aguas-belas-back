import Joi from "joi";


export const streatNameSchema = Joi.object({
  streatName: Joi.string().required(),
  districtId: Joi.number().required()
});