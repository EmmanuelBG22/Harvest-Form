import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { GeneratedId } from "./generatedId.entity";
import { hash } from "bcrypt";

@Entity({ name: "user" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  staffId: string;

  @Column()
  password: string;

  private tempPassword: string;

  @BeforeInsert()
  async hashpassword() {
    const passwordOnLoad = this.tempPassword;
    const passwordToInsert = this.password;

    if (passwordToInsert && passwordToInsert !== passwordOnLoad) {
      try {
        this.password = await hash(this.password, 8);
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}
