"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = require("express");
const EnsureAuthenticate_1 = require("../middleware/EnsureAuthenticate");
const createComment_1 = require("../useCases/createComment");
const deleteComment_1 = require("../useCases/deleteComment");
const listComment_1 = require("../useCases/listComment");
const commentRouter = (0, express_1.Router)();
exports.commentRouter = commentRouter;
commentRouter.use(EnsureAuthenticate_1.EnsureAuthenticate);
commentRouter.post('/create', (request, response) => {
    return createComment_1.createCommentController.handle(request, response);
});
commentRouter.get('/list/:value?/:search?', (request, response) => {
    return listComment_1.listCommentController.handle(request, response);
});
commentRouter.delete('/delete/:id', (request, response) => {
    return deleteComment_1.deleteCommentController.handle(request, response);
});
