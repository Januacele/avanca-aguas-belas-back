import { prisma } from "../database.js";
import { IStreatsInformation } from "../typesInterfaces/streatsInformationsTypes.js";


async function insertData(streatsInformation:IStreatsInformation) {
    return prisma.streatsInformation.create({
     data: streatsInformation
    });
}


async function findById(streatId: number) {
    return prisma.streatsInformation.findUnique({
      where: {
          id: streatId
      } 
    });
}


async function findAllStreatsInfos(streatId: number) {
    return prisma.streatsInformation.findUnique({
      where: {
        id: streatId
      },
    });
}


async function update(streatId: number, informations: IStreatsInformation){
    return prisma.streatsInformation.updateMany({
      where: {
        id: streatId
      },
        data: informations
    });
}


const streatsInformationRepository = {
    insertData,
    findById,
    findAllStreatsInfos,
    update
  };
  
  export default streatsInformationRepository;