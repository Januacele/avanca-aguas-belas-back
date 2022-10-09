import { faker } from "@faker-js/faker";

export async function creatDistrict() {
    const newDistrict = {
        id: 1,
        districtName: faker.address.cityName()
    }

    return newDistrict;
};