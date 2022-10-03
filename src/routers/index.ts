import { Router } from "express";
import authRouter from "./authRouter.js";
import districtsRouter from "./districtsRouter.js";

const router = Router();

router.use(authRouter);
router.use(districtsRouter)

export default router;
