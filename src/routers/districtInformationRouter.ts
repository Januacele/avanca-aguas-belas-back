import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { jwtAutenticateMiddleware } from "../middlewares/jwtMiddleware.js";
import * as districtInformationSchema from "../schemas/districtInformationSchema.js";
import * as districtInformationController from "../controllers/districtInformationController.js";


const districtInformationRouter = Router();

districtInformationRouter.use(jwtAutenticateMiddleware);

districtInformationRouter.post("/district/information", 
validateSchemaMiddleware(districtInformationSchema.districtInformationSchema),
districtInformationController.creatDistrictInformation);

districtInformationRouter.get("/district/information/:id", districtInformationController.getDistrictInfo);

districtInformationRouter.patch("/district/information/:id", districtInformationController.updateDistrictInformation);

export default districtInformationRouter;