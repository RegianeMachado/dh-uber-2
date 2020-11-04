import { Running } from "../entity/Running";

export interface IRunningRepository {
  findAll(): Promise<Running[]>;
  save(running: Running): Promise<Running>;
}
