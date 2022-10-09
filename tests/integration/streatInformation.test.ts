import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import { createNewUser } from "../factories/authFactory.js";
import { faker } from "@faker-js/faker";
import { creatStreatInformation } from "../factories/streatInformation.js";


const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE streatsinformation CASCADE;`;
});

describe("POST/streat/information", () => {
  it("given valid token and invalid streat id it should return 401", async () => {
    
    const bodySignup = await createNewUser();
    await agent.post("/signup").send(bodySignup);

    const bodySignin = {
        email: bodySignup.email,
        password: bodySignup.password
    };

    const resultToken = await agent.post("/signin").send(bodySignin);
    const token = resultToken.text;
    const formatedToken = `Bearer ${token}`;

    const bodyStreatInfo = creatStreatInformation();
    await agent.post("/streat/information").send(bodyStreatInfo);

    const id = faker.random.alphaNumeric();

    const result = await agent.get(`/streat/information/${id}`).set('Authorization', formatedToken);

    const status = result.status;
    expect(status).toEqual(401);

  });
   
});


afterAll(async () => {
  await prisma.$disconnect();
});
