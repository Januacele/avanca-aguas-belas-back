import {Districts} from "@prisma/client";
// import {IRegisterDistrictsNames} from "../typesInterfaces/districtTypes.js";
import districtsRepository from "../repositories/districtsRepository.js";
import {
    conflictError,
    notFoundError,
  } from "../utils/errorUtils.js";



  async function createDistrictName(districts: Districts) {
    
    const existisStreats = await districtsRepository.findDistrictById(districts.id);
    if (existisStreats) throw conflictError("User already exist");
  
    await districtsRepository.insertDistrict({ ...districts });
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
  