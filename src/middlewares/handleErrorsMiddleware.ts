import { NextFunction, Request, Response } from "express";

import { foundAppError, errorStatusCodeApp, IAppError } from "../utils/errorUtils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function handleErrorsMiddleware(err: IAppError, req: Request, res: Response, next: NextFunction) {
    console.log("An error occured!", err);
    
    if(foundAppError(err)) {
      const statusCode = errorStatusCodeApp(err.type);
      return res.status(statusCode).send(err.message)
    }
  
    res.sendStatus(500);
  }