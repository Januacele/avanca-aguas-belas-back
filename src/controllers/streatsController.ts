import { Request, Response } from "express";
import streatService from "../services/streatsService.js";
import { IStreats } from "../typesInterfaces/streatsTypes.js";


export async function creatStreatName(req: Request, res: Response) {
  const createDistrictName: IStreats = req.body;
  await streatService.createStreatName(createDistrictName);
  res.status(201).send("District added");
};


export async function getStreatName(req: Request, res: Response) {
  const getAllStreats = await streatService.getStreatsName();
  res.status(200).send(getAllStreats);
};