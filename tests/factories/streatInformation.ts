import { faker } from "@faker-js/faker";

export async function creatStreatInformation() {
    const newStreatInfo = {
        totalArea: faker.random.numeric(),
        hasBasicSanitation: false,
        hasAsphalt: true,
        hasPaving: false,
        hasStreetLighting: true,
        hasCleanWaterAccess: true,
        streatId: 1
    }

    return newStreatInfo;
};