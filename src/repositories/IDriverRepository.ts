import { Driver } from "../entity/Driver";

export interface IDriverRepository {
  findAll(): Promise<Driver[]>;
  save(driver: Driver): Promise<Driver>;
}
