import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { jwtAutenticateMiddleware } from "../middlewares/jwtMiddleware.js";
import * as streatSchema from "../schemas/streatSchema.js";
import * as streatController from "../controllers/streatsController.js";


const streatRouter = Router();

streatRouter.use(jwtAutenticateMiddleware);

streatRouter.post("/streat", 
validateSchemaMiddleware(streatSchema.streatNameSchema),
streatController.creatStreatName);

streatRouter.get("/streats", streatController.getStreatName);

streatRouter.get("/streat/:id", streatController.getStreatsNameById);

streatRouter.patch("/streat/:id", streatController.updateStrictName);

export default streatRouter;