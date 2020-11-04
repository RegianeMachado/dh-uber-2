import MySqlProviderRunning from "../../../repositories/implementations/MySqlProviderRunning";
import ListUserRunningCase from "./ListUserRunningCase";

import ListUserRunningController from "./ListUserRunningController";
import { getRepository } from "typeorm";

const mySqlProviderRunning = new MySqlProviderRunning();
const listUserRunningCase = new ListUserRunningCase(mySqlProviderRunning);

const listUserRunningController = new ListUserRunningController(
  listUserRunningCase
);

export { listUserRunningController };
