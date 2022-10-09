import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import { createNewUser } from "../factories/authFactory.js";
import { faker } from "@faker-js/faker";


const agent = supertest(app);

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY;`;
});

describe("POST/signup", () => {
  it("give a valid user data then it should return status 201", async () => {
    const databaseBefore = await prisma.user.findMany();
    
    const body = await createNewUser();
    const result = (await agent.post("/signup").send(body));
    const status= result.status;

    const databaseAfter = await prisma.user.findMany();

    expect(status).toEqual(201);
    expect(databaseAfter.length).toBeGreaterThan(databaseBefore.length);

  });

  it("given an empty email and valid password it should return 400", async() => {
    const body = await createNewUser();

    body.email = "";

    const result = await agent.post("/signup").send(body);
    const status = result.status;

    expect(status).toEqual(422);

  });

});

describe("POST /signin", () => {
  it("given a registered email and password it should return 200 and valid token", async () => {
      const bodySignup = await createNewUser();
      await agent.post("/signup").send(bodySignup);
     
      const bodySignin = {
          email: bodySignup.email,
          password: bodySignup.password
      };
      const result = await agent.post("/signin").send(bodySignin);

      const status = result.status;
      expect(status).toEqual(200);
    
  });

  it("given an unregistered email and password it should return 422", async () => {
    const bodySignup = await createNewUser();
    await agent.post("/signup").send(bodySignup);
   
    const bodySignin = {
        email: faker.internet.email(),
        password: bodySignup.password
    };
    const result = await agent.post("/signin").send(bodySignin);
    const status = result.status;

    expect(status).toEqual(401);

  });

});


afterAll(async () => {
  await prisma.$disconnect();
});
