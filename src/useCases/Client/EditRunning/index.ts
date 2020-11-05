import MySqlProviderRunning from "../../../repositories/implementations/MySqlProviderRunning";
import CreateUserRunningCase from "./EditUserRunningCase";

import CreateUserRunningController from "./EditUserRunningController";
import { getRepository } from "typeorm";

const mySqlProviderRunning = new MySqlProviderRunning();
const createUserRunningCase = new CreateUserRunningCase(mySqlProviderRunning);

const createUserRunningController = new CreateUserRunningController(
  createUserRunningCase
);

export { createUserRunningController };
