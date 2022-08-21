import { Request, Response, Router } from "express";
import { authenticateController } from "../useCases/authenticate";

const authenticateRouter = Router();

authenticateRouter.post('/', (request: Request, response: Response): Promise<Response> => {
    return authenticateController.handle(request, response);
});

export { authenticateRouter };