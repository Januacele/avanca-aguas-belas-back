import { faker } from "@faker-js/faker";
import { prisma } from '../../src/database';

export async function createNewUser() {
    const password = faker.internet.password();
    const newUser = {
        name: faker.name.firstName(),
        cpf: "222.111.111-55",
        email: faker.internet.email(),
        password,
        secretary: faker.word.noun()
    }

    return newUser;
};

export async function createNewUserUnitTest(){
    const password = faker.internet.password();
    const newUser = {
        name: faker.name.firstName(),
        cpf: "222.111.111-55",
        email: faker.internet.email(),
        password,
        secretary: faker.word.noun(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }

    return newUser;
}

export async function registeredUserEmail(){
    const originalUser = await createNewUserUnitTest();
    const name = originalUser.email;
    await prisma.user.create({
        data: originalUser,
    });

    return name;
}