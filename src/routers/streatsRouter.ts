import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as streatNameSchema from "../schemas/streatsSchema";
import { insertStreatsName } from "../controllers/streatsController.js";

const streatsRouter = Router();

streatsRouter.post(
  "/streats",
  validateSchemaMiddleware(streatNameSchema.streatNameSchema),
  insertStreatsName
);


export default streatsRouter;