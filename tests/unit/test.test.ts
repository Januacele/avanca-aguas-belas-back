import { jest } from "@jest/globals";
import { prisma } from "../../src/database";
import authService from '../../src/services/authService';
import * as authRepository from '../../src/repositories/authRepository';
import {createNewUserUnitTest} from '../factories/authFactory';

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`;
  });

describe("auth services unit test suite", () => {
    
    it(`given duplicated email data when isert a function then it should throw conflict error`, async () => {

        jest.spyOn(authRepository, "insertUser").mockImplementationOnce(async (): Promise<any> => []);

        const createNewUserEmail = await createNewUserUnitTest();

        await authService.createUser(createNewUserEmail);

        expect(authRepository.insertUser).toBeCalled(); 
    });
});


afterAll(async () => {
    await prisma.$disconnect();
})