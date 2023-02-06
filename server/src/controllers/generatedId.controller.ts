import { Request, Response, NextFunction } from "express";
import { User } from "src/entities/user.entity";
import { GeneratedId } from "src/entities/generatedId.entity";
import { HttpException } from "src/exceptions/http_exception";
import GeneratedService from "../services/generatedId.service";

class GeneratedController {
  public generatedService = new GeneratedService();

  public generateIds = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { num, id } = req.body;

    console.log(req.body);

    return await this.generatedService
      .generateIds(id, num)
      .then((ref) => res.status(201).send(ref));
  };
}

export default GeneratedController;
