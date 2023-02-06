import { getRepository } from "typeorm";
import { CreateUserDto, SignInUserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";
const unique = require("unique-random-range");
import { GeneratedId } from "../entities/generatedId.entity";
import { arrayContains, max } from "class-validator";
import {
  formGenerator,
  idGenerator,
  numberFiller,
} from "../services/utils/utils";

const pdf = require("pdf-creator-node");

class GeneratedService {
  public user = User;
  public generated_id = GeneratedId;

  public async generateIds(userId: string, num: number): Promise<any> {
    const generateIdRepository = getRepository(this.generated_id);

    const order = await generateIdRepository.find({
      order: {
        hsf_id: "DESC",
      },
    });

    const maxStr = order[0].hsf_id.split("");
    let maxNum = Number(maxStr.splice(4, 5).join(""));

    console.log("max str: ", maxStr);

    const maxIdNum = userId.split("").splice(8, 4).join("");

    console.log("maxidnum: ", maxIdNum);

    const newArrIds = idGenerator(num, maxNum, maxIdNum);

    newArrIds.forEach((x) =>
      generateIdRepository
        .save({
          hsf_id: x,
          user: userId,
        })
        .then((res) => {
          return res;
        })
    );
    return newArrIds;
  }
}

export default GeneratedService;
