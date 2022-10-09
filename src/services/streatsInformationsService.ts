import {IStreatsInformation} from "../typesInterfaces/streatsInformationsTypes.js";
import streatsInformationRepository from "../repositories/StreatsInformationRepository.js";
import streatsRepository from "../repositories/streatsRepository.js";
import {
    notFoundError
} from "../utils/errorUtils.js";



async function createStreatsInformation(streatsInformation: IStreatsInformation) {

    const existsStreats = await streatsRepository.findStreatsById(streatsInformation.streatId);
    if (!existsStreats) throw notFoundError("Invalid streat");
    
    const insertData : IStreatsInformation = {
        totalArea: streatsInformation.totalArea,
        hasBasicSanitation: streatsInformation.hasBasicSanitation,
        hasAsphalt: streatsInformation.hasAsphalt,
        hasPaving: streatsInformation.hasPaving,
        hasStreetLighting: streatsInformation.hasStreetLighting,
        hasCleanWaterAccess: streatsInformation.hasCleanWaterAccess,
        streatId: streatsInformation.streatId
    };

    await streatsInformationRepository.insertData(insertData);
};


async function getStreatsInfo(streatsId: number) {
    const verifyStreatById = await streatsInformationRepository.findById(streatsId);
    if (!verifyStreatById) throw notFoundError("Streat not found");
    
    return await streatsInformationRepository.findAllStreatsInfos(streatsId);
    
};


async function updateStreatstInformation(streatsId: number, information: IStreatsInformation){
    const verifyStreatById = await streatsInformationRepository.findById(streatsId);
    if (!verifyStreatById) throw notFoundError("Streat Information not found");
    await streatsInformationRepository.update(streatsId, information);
};




const streatsInformationService = {
    createStreatsInformation,
    getStreatsInfo,
    updateStreatstInformation
};
  

export default streatsInformationService;