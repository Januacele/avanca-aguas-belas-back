import { prisma } from "../database.js";
import { IDistrictsInformation } from "../typesInterfaces/districtInformationTypes.js";


async function insertData(districtInformation: IDistrictsInformation) {
    return prisma.districtsInformation.create({
     data: districtInformation
    });
}

async function findById(districtId: number) {
    return prisma.districtsInformation.findFirst({
      where: {
          id: districtId
      } 
    });
}

async function findDistrictInfos(districtId: number) {
    return prisma.districtsInformation.findUnique({
      where: {
        id: districtId
      },
    });
}

async function update(districtId: number, informations: IDistrictsInformation){
    return prisma.districtsInformation.updateMany({
      where: {
        id: districtId
      },
        data: informations
    });
}



const districtInformationRepository = {
    insertData,
    findById,
    findDistrictInfos,
    update,
  };
  
  export default districtInformationRepository;