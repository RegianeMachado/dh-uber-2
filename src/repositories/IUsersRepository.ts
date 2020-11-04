import { User } from "../entity/User";

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
}
