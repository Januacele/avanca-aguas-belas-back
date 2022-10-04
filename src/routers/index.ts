import { Router } from "express";
import authRouter from "./authRouter.js";
import districtsRouter from "./districtsRouter.js";
import streatRouter from "./streatsRouter.js";


const router = Router();

router.use(authRouter);
router.use(districtsRouter);
router.use(streatRouter);

export default router;
