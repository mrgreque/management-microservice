import { MongoCommentRepository } from "../../repository/implementation/MongoCommentRepository";
import { CreateCommentController } from "./CreateCommentController";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

const commentRepository = new MongoCommentRepository();
const createCommentUseCase = new CreateCommentUseCase(commentRepository);
const createCommentController = new CreateCommentController(createCommentUseCase);

export { createCommentController };