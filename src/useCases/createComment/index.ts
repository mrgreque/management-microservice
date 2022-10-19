import { MongoCommentRepository } from "../../repository/implementation/MongoCommentRepository";
import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

const commentRepository = new MongoCommentRepository();
const userRepository = new MongoUserRepository();
const createCommentUseCase = new CreateCommentUseCase(commentRepository, userRepository);
const createCommentController = new CreateCommentController(createCommentUseCase);

export { createCommentController };