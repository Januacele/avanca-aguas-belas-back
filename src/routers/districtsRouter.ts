import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { jwtAutenticateMiddleware } from "../middlewares/jwtMiddleware.js";
import * as districtNameSchema from "../schemas/districtsSchema.js";
import * as districtsController from "../controllers/districtsController.js";

const districtsRouter = Router();

districtsRouter.use(jwtAutenticateMiddleware);

districtsRouter.post("/district", 
validateSchemaMiddleware(districtNameSchema.districtNameSchema),
districtsController.creatDistrictName);

districtsRouter.get("/districts", districtsController.getDistrictName);

districtsRouter.get("/district/:id", districtsController.getDistrictNameById);

districtsRouter.patch("/district/:id", districtsController.updateDistrictName);

districtsRouter.delete("/district/:id", districtsController.deleteDistrictName);


export default districtsRouter;