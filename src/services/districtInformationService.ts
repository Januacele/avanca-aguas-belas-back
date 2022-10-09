import { IDistrictsInformation } from "../typesInterfaces/districtInformationTypes.js";
import districtInformationRepository from "../repositories/districtsInformationRepository.js";
import districtsRepository from "../repositories/districtsRepository.js";
import {
    notFoundError
} from "../utils/errorUtils.js";


async function createDistrictInformation(districtInformation: IDistrictsInformation) {

    const existsDistrict = await districtsRepository.findDistrictById(districtInformation.districtId);
    if (!existsDistrict) throw notFoundError("Invalid district");
    
    const insertData : IDistrictsInformation = {
        hasHospital: districtInformation.hasHospital,
        hasPark: districtInformation.hasPark,
        hasHealthCenter: districtInformation.hasHealthCenter,
        hasSecurityCenter: districtInformation.hasSecurityCenter,
        hasSchool: districtInformation.hasSchool,
        hasKindergartens: districtInformation.hasKindergartens,
        districtId: districtInformation.districtId
    };

    await districtInformationRepository.insertData(insertData);
};


async function getDistrictInfo(districtId: number) {
    const verifyDistrictById = await districtInformationRepository.findById(districtId);
    if (!verifyDistrictById) throw notFoundError("District not found");
    
    return await districtInformationRepository.findDistrictInfos(districtId);
    
};


async function updateDistrictInformation(districtId: number, information: IDistrictsInformation){
    const verifyStreatById = await districtInformationRepository.findById(districtId);
    if (!verifyStreatById) throw notFoundError("District Information not found");
    await districtInformationRepository.update(districtId, information);
};




const districtInformationService = {
    createDistrictInformation,
    getDistrictInfo,
    updateDistrictInformation
};
  

export default districtInformationService;