import { Router } from "express";
import authRouter from "./authRouter.js";
import districtsRouter from "./districtsRouter.js";
import streatRouter from "./streatsRouter.js";
import streatInformationRouter from "../routers/streatsInformationRoute.js";
import districtInformationRouter from "./districtInformationRouter.js";

const router = Router();

router.use(authRouter);
router.use(districtsRouter);
router.use(streatRouter);
router.use(streatInformationRouter);
router.use(districtInformationRouter);


export default router;
