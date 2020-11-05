import { Running } from "../../../entity/Running";
import { IRunningRepository } from "../../../repositories/IRunningRepository";
import { CreateUseRunningDTO } from "./EditUserRunningDTO";

export default class CreateUserRunningCase {
  constructor(private runningsRepository: IRunningRepository) {}

  async execute(data: CreateUseRunningDTO) {
    const running = new Running(data);
    await this.runningsRepository.save(running);
  }
}
