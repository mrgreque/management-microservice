import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createUserController } from "../useCases/createUser";

const userRouter = Router();

userRouter.use(EnsureAuthenticate);

userRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createUserController.handle(request, response);
});

export { userRouter };