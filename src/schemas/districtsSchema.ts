import Joi from "joi";


export const districtNameSchema = Joi.object({
  districtName: Joi.string().required(),
  
});