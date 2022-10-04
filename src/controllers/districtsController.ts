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
  const districtId = parseInt(req.params.id);
  
  if(isNaN(districtId)){
    res.status(422).send("Id must be a number");
  }

  const getDistrictId = await districtService.getDistrictById(districtId);
  
  res.status(200).send(getDistrictId);
}

export async function updateDistrictName(req: Request, res: Response) {
  const districtId = parseInt(req.params.id);
  const newDistrictName = req.body;
  if(isNaN(districtId)){
    res.status(422).send("Id must be a number");
  }

  const updateDistrict = await districtService.updateDistrictName(districtId, newDistrictName);

  res.status(200).send(updateDistrict);
}

export async function deleteDistrictName(req: Request, res: Response) {
  const districtId : any = parseInt(req.params.id);

  await districtService.deleteDistrictName(districtId);
  res.sendStatus(201);
}