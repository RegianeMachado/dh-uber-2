import MySqlProviderRunning from "../../../repositories/implementations/MySqlProviderRunning";
import CreateUserRunningCase from "./CreateUserRunningCase";

import CreateUserRunningController from "./CreateUserRunningController";
import { getRepository } from "typeorm";

const mySqlProviderRunning = new MySqlProviderRunning();
const createUserRunningCase = new CreateUserRunningCase(mySqlProviderRunning);

const createUserRunningController = new  CreateUserRunningController(createUserRunningCase);

export { createUserRunningController };
