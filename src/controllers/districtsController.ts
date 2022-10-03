import { Request, Response } from "express";
import districtService from "../services/districtsService.js";
import { IRegisterDistrictsNames } from "../typesInterfaces/districtTypes.js";
// import {Streats} from "@prisma/client";

export async function creatDistrictName(req: Request, res: Response) {
  const districtName: IRegisterDistrictsNames = req.body;
  await districtService.createDistrictName(districtName);
  res.sendStatus(201);
}

export async function getDistrictName(req: Request, res: Response) {
  await districtService.getDistrictsName();
  res.sendStatus(201);
}

export async function getDistrictNameById(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.getDistrictById(districtId);
  res.sendStatus(201);
}

export async function updateDistrictName(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.updateDistrictName(districtId);
  res.sendStatus(201);
}

export async function deleteDistrictName(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.deleteDistrictName(districtId);
  res.sendStatus(201);
}