import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { jwtAutenticateMiddleware } from "../middlewares/jwtMiddleware.js";
import * as streatInformationSchema from "../schemas/streatsInformationSchema.js";
import * as streatInformationController from "../controllers/streatsInformationsControllers.js";


const streatInformationRouter = Router();

streatInformationRouter.use(jwtAutenticateMiddleware);

streatInformationRouter.post("/streat/information", 
validateSchemaMiddleware(streatInformationSchema.streatInformationSchema),
streatInformationController.creatStreatInformation);

streatInformationRouter.get("/streat/information/:id", streatInformationController.getStreatsInfo);

streatInformationRouter.patch("/streat/information/:id", streatInformationController.updateStreatInformation);

export default streatInformationRouter;