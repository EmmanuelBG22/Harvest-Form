import { Router } from "express";
import UserController from "../controllers/user.controller";
import { Route } from "../interfaces/route.interface";

class UserRoute implements Route {
  public path: string = "/api/user";
  public router: Router = Router();
  private UserController: UserController = new UserController();

  constructor() {
    this.router.post(`${this.path}/register`, this.UserController.userRegister);
    this.router.post(`${this.path}/login`, this.UserController.userLogin);
    this.router.get(`${this.path}`, this.UserController.userDetails);
  }
}

export default UserRoute;
