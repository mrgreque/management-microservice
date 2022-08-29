import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const userRepository = new MongoUserRepository();
const authenticateUseCase = new AuthenticateUseCase(userRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };