import { prisma } from "../database.js";
import { Districts } from "@prisma/client";

export type IDistricts = Omit<Districts, 'id'>

async function insertDistrict(districts:any) {
    return prisma.districts.create({
     data: districts
    });
}


async function findByName(districtName: string) {
  return prisma.districts.findUnique({
    where: { 
      districtName
    },
  });

}


async function findAllDistricts() {
    return prisma.streats.findMany();
};


async function findDistrictById(id: number) {
    return prisma.streats.findUnique({
      where: {
        id,
      },
    });
}


async function updateDistrictName(idData: Districts, nameData: Districts){
    return prisma.streats.update({
      where: {
        id: idData.id,
      },
      districtName: nameData.districtName
    });
}

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
  updateDistrictName,
  deleteDistrictName
};

export default districtsRepository;