import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  public id: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public staffId: string;

  @IsString()
  public password: string;
}

export class SignInUserDto {
  @IsString()
  public staffId: string;

  @IsString()
  public password: string;
}
