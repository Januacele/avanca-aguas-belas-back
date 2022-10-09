import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import { creatStreat } from "../factories/streatFactory.js";
import { faker } from "@faker-js/faker";


const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE streats CASCADE;`;
});

describe("POST/streats", () => {
  it("given invalid token and valid test data it should return 401", async () => {
    const random = faker.random.alphaNumeric();
    const formatedToken = `Bearer ${random}`;

    const body = await creatStreat()
    const result = await agent.post("/streat").set('Authorization', formatedToken).send(body);
    
    const status = result.status; 

    expect(status).toBe(401);

  });

});


afterAll(async () => {
  await prisma.$disconnect();
});
