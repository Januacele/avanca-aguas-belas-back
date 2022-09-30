import prisma from "../database.js";
import {IRegisterStreatsNames} from "../typesInterfaces/streatsTypes.js";

export async function insertStreat(streats: IRegisterStreatsNames) {
    return prisma.streats.create({
     data: streats
    });
}

export async function findStreats() {
    return prisma.streats.findMany();
}

export async function findStreatById(id: number) {
    return prisma.streats.findUnique({
      where: {
        id,
      },
    });
}

export async function updateStreatName(id: number, streats: IRegisterStreatsNames){
    return prisma.streats.update({
      where: {
        id,
      },
      data: streats
    });
}

export async function deleteStreatName(id: number){
    return prisma.streats.delete({
      where: {
        id
      }
    });
}





