import cors from "cors";
import express from "express";
import "express-async-errors";
import router from "./routers/index.js";
import dotenv from "dotenv";
import handleErrorsMiddleware from "../src/middlewares/handleErrorsMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

if (process.env.NODE_ENV === "test") {
  //
}

export default app;
