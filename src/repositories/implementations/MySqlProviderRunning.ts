import { Running } from "../../entity/Running";
import { IRunningRepository } from "../IRunningRepository";
import { getRepository, Repository } from "typeorm";

export default class MysqlProvider implements IRunningRepository {
  findAll(): Promise<Running[]> {
    const db = getRepository(Running);
    return db.find();
  }
  save(running: Running): Promise<Running> {
    const db = getRepository(Running);
    return db.save(running);
  }
}
