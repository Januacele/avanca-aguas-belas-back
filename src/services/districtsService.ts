import {Districts} from "@prisma/client";
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
    const verifyStreats = await districtsRepository.findAllDistricts();

    return verifyStreats;
  }


  async function getDistrictById(districts: Districts) {
    const verifyStreatById = await districtsRepository.findDistrictById(districts.id);
    if (!verifyStreatById) throw notFoundError("User not found");
  
    return verifyStreatById;
  }

//   async function updateDistrictName(districts: Districts){
//     const verifyStreatById = await districtsRepository.findDistrictById(districts.id);
//     if (!verifyStreatById) throw notFoundError("User not found");
//     await districtsRepository.updateDistrictName(districts.id, districts.districtName);
// }


async function deleteDistrictName(districts: Districts){
    const verifyStreatById = await districtsRepository.findDistrictById(districts.id);
    if (!verifyStreatById) throw notFoundError("User not found");
    await districtsRepository.deleteDistrictName(districts.id);
}


  const districtService = {
    createDistrictName,
    getDistrictsName,
    getDistrictById,
    // updateDistrictName,
    deleteDistrictName
  };
  
  export default districtService;
  