import Joi from "joi";


export const streatInformationSchema = Joi.object({
    totalArea: Joi.number().precision(2),
    hasBasicSanitation: Joi.boolean(),
    hasAsphalt: Joi.boolean(),
    hasPaving: Joi.boolean(),
    hasStreetLighting: Joi.boolean(),
    hasCleanWaterAccess: Joi.boolean(),
    streatId: Joi.number().required()
});
