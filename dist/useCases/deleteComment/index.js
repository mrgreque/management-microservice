"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentController = void 0;
const MongoCommentRepository_1 = require("../../repository/implementation/MongoCommentRepository");
const DeleteCommentController_1 = require("./DeleteCommentController");
const DeleteCommentUseCase_1 = require("./DeleteCommentUseCase");
const commentRepository = new MongoCommentRepository_1.MongoCommentRepository();
const deleteCommentUseCase = new DeleteCommentUseCase_1.DeleteCommentUseCase(commentRepository);
const deleteCommentController = new DeleteCommentController_1.DeleteCommentController(deleteCommentUseCase);
exports.deleteCommentController = deleteCommentController;
