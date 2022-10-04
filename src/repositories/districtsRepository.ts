import { prisma } from "../database.js";
//import { IDistricts } from "../typesInterfaces/districtTypes";


async function insertDistrict(districts:any) {
    return prisma.districts.create({
     data: districts
    });
}


async function findByName (districtName: string ) {
  return await prisma.districts.findFirst({
    where: {
      districtName
    }
  });
}; 


async function findAllDistricts() {
    return prisma.districts.findMany();
};


async function findDistrictById(districtId: number) {
    return prisma.districts.findFirst({
      where: {
          id: districtId
      } 
    });
}


// async function updateDistrictName(idData: Districts, nameData: Districts){
//     return prisma.streats.update({
//       where: {
//         id: idData.id,
//       },
//       districtName: nameData.districtName
//     });
// }

async function deleteDistrictName(id: number){
    return prisma.streats.delete({
      where: {
        id
      }
    });
}


const districtsRepository = {
  insertDistrict,
  findByName,
  findAllDistricts,
  findDistrictById,
  // updateDistrictName,
  deleteDistrictName
};

export default districtsRepository;