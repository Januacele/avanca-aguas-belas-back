import { Request, Response } from "express";
import districtService from "../services/districtsService.js";
import { IDistricts } from "../typesInterfaces/districtTypes.js";
//import {Districts} from "@prisma/client";

export async function creatDistrictName(req: Request, res: Response) {
  const createDistrictName: IDistricts = req.body;
  await districtService.createDistrictName(createDistrictName);
  res.status(201).send("District added");
}

export async function getDistrictName(req: Request, res: Response) {
  const getAllDistricts = await districtService.getDistrictsName();
  res.status(200).send(getAllDistricts);
}

export async function getDistrictNameById(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.getDistrictById(districtId);
  res.sendStatus(201);
}

// export async function updateDistrictName(req: Request, res: Response) {
//   const districtId : any = parseInt(req.params.id);

//   await districtService.updateDistrictName(districtId);
//   res.sendStatus(201);
// }

export async function deleteDistrictName(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.deleteDistrictName(districtId);
  res.sendStatus(201);
}