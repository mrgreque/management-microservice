import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createUserController } from "../useCases/createUser";
import { deleteUserController } from "../useCases/deleteUser";
import { updateUserController } from "../useCases/updateUser";

const userRouter = Router();

userRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createUserController.handle(request, response);
});

userRouter.use(EnsureAuthenticate);

userRouter.delete('/delete/:id', (request: Request, response: Response): Promise<Response> => {
    return deleteUserController.handle(request, response);
});

userRouter.put('/update/:id', (request: Request, response: Response): Promise<Response> => {
    return updateUserController.handle(request, response);
});

export { userRouter };