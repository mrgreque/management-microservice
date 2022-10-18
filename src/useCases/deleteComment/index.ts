import { MongoCommentRepository } from "../../repository/implementation/MongoCommentRepository";
import { DeleteCommentController } from "./DeleteCommentController";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

const commentRepository = new MongoCommentRepository();
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);
const deleteCommentController = new DeleteCommentController(deleteCommentUseCase);

export { deleteCommentController };