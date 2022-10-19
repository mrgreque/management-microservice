import { MongoCommentRepository } from "../../repository/implementation/MongoCommentRepository";
import { MongoUserRepository } from "../../repository/implementation/MongoUserRepository";
import { ListCommentController } from "./ListCommentController";
import { ListCommentUseCase } from "./ListCommentUseCase";

const commentRepository = new MongoCommentRepository();
const userRepository = new MongoUserRepository();
const listCommentUseCase = new ListCommentUseCase(commentRepository, userRepository);
const listCommentController = new ListCommentController(listCommentUseCase);

export { listCommentController };