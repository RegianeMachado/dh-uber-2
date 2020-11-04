import MySqlProvider from "../../../repositories/implementations/MySqlProvider";
import CreateUserUseCase from "./CreateUserUseCase";

import CreateUserController from "./CreateUserController";
import { getRepository } from "typeorm";

const mySqlProvider = new MySqlProvider();
const createUserUseCase = new CreateUserUseCase(mySqlProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
