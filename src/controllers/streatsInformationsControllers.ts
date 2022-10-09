import { Request, Response } from "express";
import streatsInformationService from "../services/streatsInformationsService.js";
import { IStreatsInformation } from "../typesInterfaces/streatsInformationsTypes.js";


export async function creatStreatInformation(req: Request, res: Response) {
    
    const insertStreatInformation: IStreatsInformation = req.body;
    
    await streatsInformationService.createStreatsInformation(insertStreatInformation);
    res.status(201).send("Streats information added");
};


export async function getStreatsInfo(req: Request, res: Response) {
    const streatId: number = parseInt(req.params.id);
    if(isNaN(streatId)){
      res.status(422).send("Id must be a number");
    }

    const getStreatInfos = await streatsInformationService.getStreatsInfo(streatId);
    res.status(200).send(getStreatInfos);
};


export async function updateStreatInformation(req: Request, res: Response) {
    const streatId = parseInt(req.params.id);
    const newStreatInformation = req.body;
  
    if(isNaN(streatId)){
      res.status(422).send("Id must be a number");
    }
    const updateStreatInformation = await streatsInformationService.updateStreatstInformation(streatId, newStreatInformation);
    res.status(200).send(updateStreatInformation);
};