import { getRepository } from "typeorm";
import { CreateUserDto, SignInUserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";
import { resolve } from "path";
import { compare } from "bcrypt";

class UserService {
  public user = User;

  public async createUser(userData: CreateUserDto): Promise<User | any> {
    const userRepository = getRepository(this.user);
    const findUser = await userRepository.findOne({
      where: { staffId: userData.staffId },
    });
    if (findUser) {
      return "User Already Exist";
    }
    const hashedPassword = await hash(userData.password, 10);
    const createdUser: User = await userRepository.save({
      ...userData,
      password: hashedPassword,
    });
    return createdUser;
  }

  public async findUser(userData: SignInUserDto): Promise<User> {
    const userRepository = getRepository(this.user);

    const findUser = await userRepository.findOne({
      where: { staffId: userData.staffId },
    });
    console.log(findUser);

    if (!findUser) {
      throw new Error("Invalid User");
    }
    try {
      const isMatch = compare(findUser.password, userData.password);
      if (!isMatch) {
        throw new Error("invalid credentials");
      }
      return findUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserService;
