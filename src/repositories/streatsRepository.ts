import { prisma } from "../database.js";


async function insertStreat(streats:any) {
    return prisma.streats.create({
     data: streats
    });
};


async function findByName (streatName: string ) {
  return await prisma.streats.findFirst({
    where: {
        streatName
    }
  });
}; 


async function findAllStreats() {
    return prisma.streats.findMany();
};


async function findStreatsById(streatId: number) {
    return prisma.streats.findFirst({
      where: {
          id: streatId
      } 
    });
}


async function updateStreatName(streatId: number, name: string){
    return prisma.streats.updateMany({
      where: {
        id: streatId
      },
        data: name
    });
}

async function updateStreatDistrict(streatId: number, districtId: number){
    return prisma.streats.updateMany({
      where: {
        id: streatId
      },
        data: districtId
    });
}


async function deleteStreatName(id: number){
    return prisma.streats.delete({
      where: {
        id
      }
    });
}


const streatsRepository = {
    insertStreat,
    findByName,
    findAllStreats,
    findStreatsById,
    updateStreatName,
    deleteStreatName,
    updateStreatDistrict
};

export default streatsRepository;