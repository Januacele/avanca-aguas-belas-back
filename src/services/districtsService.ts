import { IDistricts } from "../typesInterfaces/districtTypes";
import districtsRepository from "../repositories/districtsRepository.js";
import {
    conflictError,
    notFoundError,
  } from "../utils/errorUtils.js";



  async function createDistrictName(districts: IDistricts) {
    
    const existsDistrict = await districtsRepository.findByName(districts.districtName);
    if (existsDistrict) throw conflictError("User already exist");
    
    const insertData : IDistricts = {
      districtName: districts.districtName
    };

    await districtsRepository.insertDistrict(insertData);
  }


  async function getDistrictsName() {
    return await districtsRepository.findAllDistricts();

  }


  async function getDistrictById(districtId: number) {
    const verifyDistrictId = await districtsRepository.findDistrictById(districtId);
    if (!verifyDistrictId) throw notFoundError("District not found");
  
    return verifyDistrictId;
    
  }

  async function updateDistrictName(districtId: number, name: string){
    const verifyStreatById = await districtsRepository.findDistrictById(districtId);
    if (!verifyStreatById) throw notFoundError("User not found");
    await districtsRepository.updateDistrictName(districtId, name);
}


async function deleteDistrictName(districtId: number){
    const verifyStreatById = await districtsRepository.findDistrictById(districtId);
    if (!verifyStreatById) throw notFoundError("User not found");
    await districtsRepository.deleteDistrictName(districtId);
}


  const districtService = {
    createDistrictName,
    getDistrictsName,
    getDistrictById,
    updateDistrictName,
    deleteDistrictName
  };
  
  export default districtService;
  