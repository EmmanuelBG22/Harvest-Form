import { IsString } from "class-validator";

export class GenerateIdDto {
  @IsString()
  public id: string;

  @IsString()
  public hsf_id: string;

  @IsString()
  user_id: string;
}
