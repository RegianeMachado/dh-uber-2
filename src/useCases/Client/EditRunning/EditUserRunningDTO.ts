import { User } from "../../../entity/User";
import { Driver } from "../../../entity/Driver";

export interface CreateUseRunningDTO {
  destino: string;
  origem: string;
  status: string;
  user: User;
  driver: Driver;
}
