import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import { creatDistrict } from "../factories/districtFactory.js";
import { faker } from "@faker-js/faker";


const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE districts CASCADE;`;
});

describe("POST/district", () => {
  it("given invalid token and valid test data it should return 401", async () => {
    const random = faker.random.alphaNumeric();
    const formatedToken = `Bearer ${random}`;

    const body = await creatDistrict()
    const result = await agent.post("/district").set('Authorization', formatedToken).send(body);
    
    const status = result.status; 

    expect(status).toBe(401);

  });

});

afterAll(async () => {
  await prisma.$disconnect();
});
