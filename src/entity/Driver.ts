import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column()
  carro: string;

  constructor(props: Omit<Driver, "id">) {
    Object.assign(this, props);
  }
}
