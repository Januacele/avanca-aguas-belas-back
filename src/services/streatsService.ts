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
  };


  async function getStreatsName() {
    return await streatsRepository.findAllStreats();
  };


  async function getStreatsById(streatId: number) {
    const verifyStreatId = await streatsRepository.findStreatsById(streatId);
    if (!verifyStreatId) throw notFoundError("Streat not found");
  
    return verifyStreatId;
  };


  async function updateStreatstName(streatsId: number, name: string){
    const verifyStreatById = await streatsRepository.findStreatsById(streatsId);
    if (!verifyStreatById) throw notFoundError("Streat not found");
    await streatsRepository.updateStreatName(streatsId, name);
  };


  async function deleteDistrictName(streatsId: number){
    const verifyStreatById = await streatsRepository.findStreatsById(streatsId);
    if (!verifyStreatById) throw notFoundError("Streat not found");
    await streatsRepository.deleteStreatName(streatsId);
  };


  const streatService = {
    createStreatName,
    getStreatsName,
    getStreatsById,
    updateStreatstName,
    deleteDistrictName
  };
  
  export default streatService;