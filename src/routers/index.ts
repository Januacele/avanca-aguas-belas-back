import { Router } from "express";
import authRouter from "./authRouter.js";
import streatsRouter from "./streatsRouter.js";

const router = Router();

router.use(authRouter);
router.use(streatsRouter)

export default router;
