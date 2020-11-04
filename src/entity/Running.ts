import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Driver } from "./Driver";

@Entity()
export class Running {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  status: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Driver)
  @JoinColumn()
  driver: Driver;

  constructor(props: Omit<Running, "id">) {
    Object.assign(this, props);
  }
}
