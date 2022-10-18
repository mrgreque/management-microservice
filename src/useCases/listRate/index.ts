import { MongoRateRepository } from "../../repository/implementation/MongoRateRepository";
import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { ListRateController } from "./ListRateController";
import { ListRateUseCase } from "./ListRateUseCase";

const rateRepository = new MongoRateRepository();
const userRepository = new MongoUserRepository();
const listRateUseCase = new ListRateUseCase(rateRepository, userRepository);
const listRateController = new ListRateController(listRateUseCase);

export { listRateController };