import {MigrationInterface, QueryRunner} from "typeorm";

export class Database1604490810068 implements MigrationInterface {
    name = 'Database1604490810068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `driver` (`id` int NOT NULL AUTO_INCREMENT, `placa` varchar(255) NOT NULL, `carro` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `running` (`id` int NOT NULL AUTO_INCREMENT, `origem` varchar(255) NOT NULL, `destino` varchar(255) NOT NULL, `status` varchar(255) NOT NULL, `userId` int NULL, `driverId` int NULL, UNIQUE INDEX `REL_25775147c6d45de3ceab51f5c1` (`userId`), UNIQUE INDEX `REL_30bd988530c21a47d5b74038a1` (`driverId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `running` ADD CONSTRAINT `FK_25775147c6d45de3ceab51f5c12` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `running` ADD CONSTRAINT `FK_30bd988530c21a47d5b74038a16` FOREIGN KEY (`driverId`) REFERENCES `driver`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `running` DROP FOREIGN KEY `FK_30bd988530c21a47d5b74038a16`");
        await queryRunner.query("ALTER TABLE `running` DROP FOREIGN KEY `FK_25775147c6d45de3ceab51f5c12`");
        await queryRunner.query("DROP INDEX `REL_30bd988530c21a47d5b74038a1` ON `running`");
        await queryRunner.query("DROP INDEX `REL_25775147c6d45de3ceab51f5c1` ON `running`");
        await queryRunner.query("DROP TABLE `running`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `driver`");
    }

}
