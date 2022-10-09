import { faker } from "@faker-js/faker";

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