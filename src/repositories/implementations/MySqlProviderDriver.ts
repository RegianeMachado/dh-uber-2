import { Driver } from "../../entity/Driver";
import { IDriverRepository } from "../IDriverRepository";
import { getRepository, Repository } from "typeorm";

export default class MysqlProvider implements IDriverRepository {
  findAll(): Promise<Driver[]> {
    const db = getRepository(Driver);
    return db.find();
  }
  save(driver: Driver): Promise<Driver> {
    const db = getRepository(Driver);
    return db.save(driver);
  }
}
