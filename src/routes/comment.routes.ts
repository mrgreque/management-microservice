import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createCommentController } from "../useCases/createComment";
import { deleteCommentController } from "../useCases/deleteComment";
import { listCommentController } from "../useCases/listComment";

const commentRouter = Router();

commentRouter.use(EnsureAuthenticate);

commentRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createCommentController.handle(request, response);
});

commentRouter.get('/list/:value?/:search?', (request: Request, response: Response): Promise<Response> => {
    return listCommentController.handle(request, response);
});

commentRouter.delete('/delete/:id', (request: Request, response: Response) => {
    return deleteCommentController.handle(request, response);
});

export { commentRouter };