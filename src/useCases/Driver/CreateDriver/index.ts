import MySqlProviderDriver from "../../../repositories/implementations/MySqlProviderDriver";
import CreateDriverCase from "./CreateDriverCase";

import CreateDriverController from "./CreateDriverController";
import { getRepository } from "typeorm";

const mySqlProviderDriver = new MySqlProviderDriver();
const createDriverCase = new CreateDriverCase(mySqlProviderDriver);

const createDriverController = new CreateDriverController(createDriverCase);

export { createDriverController };
