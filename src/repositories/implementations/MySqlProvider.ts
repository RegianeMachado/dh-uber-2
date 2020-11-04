import { User } from "../../entity/User";
import { IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm";

export default class MysqlProvider implements IUsersRepository {
  findAll(): Promise<User[]> {
    const db = getRepository(User);
    return db.find();
  }
  save(user: User): Promise<User> {
    const db = getRepository(User);
    return db.save(user);
  }
}
