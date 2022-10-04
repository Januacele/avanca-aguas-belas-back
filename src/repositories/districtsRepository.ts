import { prisma } from "../database.js";


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


async function updateDistrictName(districtId: number, name: string){
    return prisma.districts.update({
      where: {
        id: districtId
      },
        data:name
    });
}

async function deleteDistrictName(id: number){
    return prisma.districts.delete({
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
  updateDistrictName,
  deleteDistrictName
};

export default districtsRepository;