import { MongoRateRepository } from "../../repository/implementation/MongoRateRepository";
import { CreateRateController } from "./CreateRateController";
import { CreateRateUseCase } from "./CreateRateUseCase";

const rateRepository = new MongoRateRepository();
const createRateUseCase = new CreateRateUseCase(rateRepository);
const createRateController = new CreateRateController(createRateUseCase);

export { createRateController };