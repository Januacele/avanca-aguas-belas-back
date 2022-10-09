import { faker } from "@faker-js/faker";

export async function creatStreat() {
    const newStreat = {
        streatName: faker.address.street(),
    }

    return newStreat;
};