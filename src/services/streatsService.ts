import {Streats} from "@prisma/client";
import * as streatsRepository from "../repositories/streatsRepository.js";
import {
    conflictError,
    notFoundError,
  } from "../utils/errorUtils.js";


  async function createStreatName(streats: Streats) {
    const existisStreats = await streatsRepository.findStreatById(streats.id);
    if (existisStreats) throw conflictError("User already exist");
  
    await streatsRepository.insertStreat({ ...streats });
  }


  async function getStreats() {
    const verifyStreats = await streatsRepository.findStreats();

    return verifyStreats;
  }


  async function getStreatById(streats: Streats) {
    const verifyStreatById = await streatsRepository.findStreatById(streats.id);
    if (!verifyStreatById) throw notFoundError("User not found");
  
    return verifyStreatById;
  }

  async function updateStreatName(streats: Streats){
    const verifyStreatById = await streatsRepository.findStreatById(streats.id);
    if (!verifyStreatById) throw notFoundError("User not found");
    await streatsRepository.updateStreatName(streats.id, {streatName: streats.streatName});
}


async function deleteStreatName(streats: Streats){
    const verifyStreatById = await streatsRepository.findStreatById(streats.id);
    if (!verifyStreatById) throw notFoundError("User not found");
    await streatsRepository.deleteStreatName(streats.id);
}


  const streatService = {
    createStreatName,
    getStreats,
    getStreatById,
    updateStreatName,
    deleteStreatName
  };
  
  export default streatService;
  