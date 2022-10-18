import { MongoCommentRepository } from "../../repository/implementation/MongoCommentRepository";
import { ListCommentController } from "./ListCommentController";
import { ListCommentUseCase } from "./ListCommentUseCase";

const commentRepository = new MongoCommentRepository();
const listCommentUseCase = new ListCommentUseCase(commentRepository);
const listCommentController = new ListCommentController(listCommentUseCase);

export { listCommentController };