import { Request, Response } from "express";
import districtInformationService from "../services/districtInformationService.js";
import { IDistrictsInformation } from "../typesInterfaces/districtInformationTypes.js";


export async function creatDistrictInformation(req: Request, res: Response) {
    
    const insertDistrictInformation: IDistrictsInformation = req.body;
    
    await districtInformationService.createDistrictInformation(insertDistrictInformation);
    res.status(201).send("District information added");
};


export async function getDistrictInfo(req: Request, res: Response) {
    const districtId: number = parseInt(req.params.id);
    if(isNaN(districtId)){
      res.status(422).send("Id must be a number");
    }

    const getDistrictInfos = await districtInformationService.getDistrictInfo(districtId);
    res.status(200).send(getDistrictInfos);
};


export async function updateDistrictInformation(req: Request, res: Response) {
    const districtId = parseInt(req.params.id);
    const newDistrictInformation = req.body;
  
    if(isNaN(districtId)){
      res.status(422).send("Id must be a number");
    }
    const updateDistrictInformation = await districtInformationService.updateDistrictInformation(districtId, newDistrictInformation);
    res.status(200).send(updateDistrictInformation);
};