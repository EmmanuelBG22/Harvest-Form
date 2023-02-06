import { Router } from "express";
import GeneratedController from "../controllers/generatedId.controller";
import { Route } from "../interfaces/route.interface";

class GeneratedRoute implements Route {
  public path: string = "/api/generate";
  public router: Router = Router();
  private GeneratedController: GeneratedController = new GeneratedController();

  constructor() {
    this.router.post(`${this.path}`, this.GeneratedController.generateIds);
  }
}

export default GeneratedRoute;
