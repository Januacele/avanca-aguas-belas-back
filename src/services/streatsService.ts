import { IStreats } from "../typesInterfaces/streatsTypes.js";
import streatsRepository from "../repositories/streatsRepository.js";
import districtsRepository from "../repositories/districtsRepository.js";
import {
    conflictError,
    notFoundError,
  } from "../utils/errorUtils.js";


  async function createStreatName(streats: IStreats) {
    
    const existsStreatName = await streatsRepository.findByName(streats.streatName);
    if (existsStreatName) throw conflictError("User already exist");

    const existsDistrict = await districtsRepository.findDistrictById(streats.districtId);
    if (!existsDistrict) throw notFoundError("District not found");

    
    const insertData : IStreats = {
      streatName: streats.streatName,
      districtId: streats.districtId
    };

    await streatsRepository.insertStreat(insertData);
  }




  const streatService = {
    createStreatName
  };
  
  export default streatService;