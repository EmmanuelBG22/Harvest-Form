import { GeneratedId } from "../entities/generatedId.entity";
import { User } from "../entities/user.entity";
import {
  getRepository,
  MigrationInterface,
  QueryRunner,
  RemoveOptions,
  SaveOptions,
} from "typeorm";

export class user1665762416982 implements MigrationInterface {
  id1: GeneratedId = {
    id: 0,
    createdAt: new Date(),
    hsf_id: "HS-000000000",
    user: "TGE-100000000",
    hasId: function (): boolean {
      throw new Error("Function not implemented.");
    },
    save: function (options?: SaveOptions | undefined): Promise<GeneratedId> {
      throw new Error("Function not implemented.");
    },
    remove: function (
      options?: RemoveOptions | undefined
    ): Promise<GeneratedId> {
      throw new Error("Function not implemented.");
    },
    softRemove: function (
      options?: SaveOptions | undefined
    ): Promise<GeneratedId> {
      throw new Error("Function not implemented.");
    },
    recover: function (
      options?: SaveOptions | undefined
    ): Promise<GeneratedId> {
      throw new Error("Function not implemented.");
    },
    reload: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
  };
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.connection.synchronize();
    const generateIdRepository = getRepository("generated_id");

    await generateIdRepository.save(this.id1);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
