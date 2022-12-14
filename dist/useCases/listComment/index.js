"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCommentController = void 0;
const MongoCommentRepository_1 = require("../../repository/implementation/MongoCommentRepository");
const MongoUserRepository_1 = require("../../repository/implementation/MongoUserRepository");
const ListCommentController_1 = require("./ListCommentController");
const ListCommentUseCase_1 = require("./ListCommentUseCase");
const commentRepository = new MongoCommentRepository_1.MongoCommentRepository();
const userRepository = new MongoUserRepository_1.MongoUserRepository();
const listCommentUseCase = new ListCommentUseCase_1.ListCommentUseCase(commentRepository, userRepository);
const listCommentController = new ListCommentController_1.ListCommentController(listCommentUseCase);
exports.listCommentController = listCommentController;
