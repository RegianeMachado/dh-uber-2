import { Driver } from "../../../entity/Driver";
import { IDriverRepository } from "../../../repositories/IDriverRepository";
import { CreateDriverDTO } from "./CreateDriverDTO";

export default class CreateDriverCase {
  constructor(private driverRepository: IDriverRepository) {}

  async execute(data: CreateDriverDTO) {
    const driver = new Driver(data);
    await this.driverRepository.save(driver);
  }
}
