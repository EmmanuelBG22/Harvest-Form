import { Request, Response, NextFunction, response } from "express";
import { CreateUserDto } from "src/dtos/user.dto";
import { User } from "src/entities/user.entity";
import { HttpException } from "src/exceptions/http_exception";
import UserService from "../services/user.service";

class UserController {
  public userService = new UserService();

  public userRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<CreateUserDto> => {
    const savedUser = await this.userService.createUser({ ...req.body });
    res.json(savedUser);
    return savedUser;
  };

  public userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<User | void> => {
    console.log(req.body);
    try {
      if (Object.keys(req.body).length === 0)
        throw new Error("insert sufficient information");
      const { userId, password } = req.body;

      const user = await this.userService.findUser(req.body);

      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };
  public userDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    res.status(201).send("working");
  };
}

export default UserController;
