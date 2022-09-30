import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as authSchema from "../schemas/authSchema.js";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchemaMiddleware(authSchema.userSchema),
  signUp
);
authRouter.post(
  "/signin",
  validateSchemaMiddleware(authSchema.loginSchema),
  signIn
);

export default authRouter;
