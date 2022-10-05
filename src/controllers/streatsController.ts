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


export async function getStreatsNameById(req: Request, res: Response) {
  const streatId = parseInt(req.params.id);
  
  if(isNaN(streatId)){
    res.status(422).send("Id must be a number");
  }
  const getStreatId = await streatService.getStreatsById(streatId);
  res.status(200).send(getStreatId);
};


export async function updateStrictName(req: Request, res: Response) {
  const streatId = parseInt(req.params.id);
  const newStreatNameOrDistrict = req.body;

  if(isNaN(streatId)){
    res.status(422).send("Id must be a number");
  }
  const updateStreat = await streatService.updateStreatstName(streatId, newStreatNameOrDistrict);
  res.status(200).send(updateStreat);
};


export async function deleteStreatName(req: Request, res: Response) {
  const streatId = parseInt(req.params.id);

  if(isNaN(streatId)){
    res.status(422).send("Id must be a number");
  }
  const deleteStreat = await streatService.deleteDistrictName(streatId);
  res.status(200).send(deleteStreat);
};