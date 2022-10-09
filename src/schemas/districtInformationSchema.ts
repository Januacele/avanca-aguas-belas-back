import Joi from "joi";


export const districtInformationSchema = Joi.object({
    hasHospital: Joi.boolean(),
    hasPark: Joi.boolean(),
    hasHealthCenter: Joi.boolean(),
    hasSecurityCenter: Joi.boolean(),
    hasSchool: Joi.boolean(),
    hasKindergartens: Joi.boolean(),
    districtId: Joi.number().required()
});
 