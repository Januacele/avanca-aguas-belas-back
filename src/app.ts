import cors from "cors";
import express from "express";
import "express-async-errors";
import router from "./routers/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

if(process.env.NODE_ENV === "test"){
    //
}



export default app;