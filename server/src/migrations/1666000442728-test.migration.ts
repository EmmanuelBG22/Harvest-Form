import { MigrationInterface, QueryRunner } from "typeorm";

export class test1666000442728 implements MigrationInterface {
  name = "test1666000442728";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `generated_id` (`id` int NOT NULL AUTO_INCREMENT, `hsf_id` varchar(12) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user` varchar(255) NOT NULL, UNIQUE INDEX `IDX_2ece626b047b1a3abc9d60f212` (`hsf_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `user` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `staffId` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `user`");
    await queryRunner.query(
      "DROP INDEX `IDX_2ece626b047b1a3abc9d60f212` ON `generated_id`"
    );
    await queryRunner.query("DROP TABLE `generated_id`");
  }
}
