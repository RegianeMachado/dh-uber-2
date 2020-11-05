import { Running } from "../../../entity/Running";
import { IRunningRepository } from "../../../repositories/IRunningRepository";

export default class ListUserRunningCase {
  constructor(private runningsRepository: IRunningRepository) {}

  async execute() {
    const running = await this.runningsRepository.findAll();

    return running;
  }
}
