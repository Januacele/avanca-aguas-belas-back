import { prisma } from "../database.js";
import { ICreateUserData } from "../typesInterfaces/userTypes";

export async function insertUser(user: ICreateUserData) {
  return prisma.user.create({
    data: user,
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
