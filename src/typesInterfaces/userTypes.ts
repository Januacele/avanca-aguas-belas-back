import { User } from "@prisma/client";

export type IUserEmailAndPassword = Omit<
  User,
  "id" | "cpf" | "name" | "secretary" | "createdAt" | "updatedAt"
>;
export type ICreateUserData = Omit<User, "id">;
