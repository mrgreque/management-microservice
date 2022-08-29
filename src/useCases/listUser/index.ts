import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const userRepository = new MongoUserRepository();
const listUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };