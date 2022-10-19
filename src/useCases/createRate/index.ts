import { MongoRateRepository } from "../../repository/implementation/MongoRateRepository";
import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { CreateRateController } from "./CreateRateController";
import { CreateRateUseCase } from "./CreateRateUseCase";

const rateRepository = new MongoRateRepository();
const userRepository = new MongoUserRepository();
const createRateUseCase = new CreateRateUseCase(rateRepository, userRepository);
const createRateController = new CreateRateController(createRateUseCase);

export { createRateController };