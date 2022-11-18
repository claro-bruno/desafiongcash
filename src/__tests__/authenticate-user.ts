import { prisma } from "../database/prismaClient";
import {
  AuthenticateUserUseCase,
  IAuthenticateUser,
} from "../modules/users/AuthenticateUser/AuthenticateUserUseCase";
import { AppError } from "../middlewares/AppError";

// beforeAll(async () => {
//   const account_bruno = await prisma.accounts.create({
//     data: { balance: 100 },
//   });

//   await prisma.users.create({
//     data: {
//       username: "bruno",
//       password: "Testando1234",
//       accountId: account_bruno.id,
//     },
//   });

//   const account_lucas = await prisma.accounts.create({
//     data: { balance: 100 },
//   });

//   await prisma.users.create({
//     data: {
//       username: "lucas",
//       password: "Testando1234",
//       accountId: account_lucas.id,
//     },
//   });

//   const account_erik = await prisma.accounts.create({
//     data: { balance: 100 },
//   });

//   await prisma.users.create({
//     data: {
//       username: "erik",
//       password: "Testando1234",
//       accountId: account_erik.id,
//     },
//   });

//   const account_renata = await prisma.accounts.create({
//     data: { balance: 100 },
//   });

//   await prisma.users.create({
//     data: {
//       username: "renata",
//       password: "Testando1234",
//       accountId: account_renata.id,
//     },
//   });

//   console.log("✨ 4 users successfully created!");
// });

// afterAll(async () => {
//   const deleteUsers = prisma.users.deleteMany();
//   const deleteAccounts = prisma.accounts.deleteMany();

//   await prisma.$transaction([deleteUsers, deleteAccounts]);

//   await prisma.$disconnect();
// });

it("should authenticate a valid username", async () => {
  const user: IAuthenticateUser = {
    username: "renata",
    password: "Testando1234",
  };

  const authenticatedUser = await new AuthenticateUserUseCase().execute(user);
  expect(authenticatedUser).toHaveProperty("token");
});

// it("should not create username less length", async () => {
//   const user: ICreateUser = {
//     username: "br",
//     password: "Testando1234",
//   };

//   await expect(new CreateUserUseCase().execute(user)).rejects.toEqual(
//     new AppError("Dados Inválidos")
//   );
// });

// it("should not create user with password less length", async () => {
//   const user: ICreateUser = {
//     username: "bruno",
//     password: "Teste",
//   };

//   await expect(new CreateUserUseCase().execute(user)).rejects.toEqual(
//     new AppError("Dados Inválidos")
//   );
// });

// it("should not create user with password without number", async () => {
//   const user: ICreateUser = {
//     username: "bruno",
//     password: "Testando",
//   };

//   await expect(new CreateUserUseCase().execute(user)).rejects.toEqual(
//     new AppError("Dados Inválidos")
//   );
// });

// it("should not create user with password without Upper Letter", async () => {
//   const user: ICreateUser = {
//     username: "bruno",
//     password: "testando1234",
//   };

//   await expect(new CreateUserUseCase().execute(user)).rejects.toEqual(
//     new AppError("Dados Inválidos")
//   );
// });

// it("should not create user exists", async () => {
//   const user: ICreateUser = {
//     username: "bruno",
//     password: "Testando1234",
//   };

//   await expect(new CreateUserUseCase().execute(user)).rejects.toEqual(
//     new AppError("Usuario existente", 401)
//   );
// });
