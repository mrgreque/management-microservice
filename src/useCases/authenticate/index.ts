import { KnexUserRepository } from "../../repository/implementation/KnexUserRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const userRepository = new KnexUserRepository();
const authenticateUseCase = new AuthenticateUseCase(userRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };