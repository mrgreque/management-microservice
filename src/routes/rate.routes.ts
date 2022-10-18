import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createRateController } from "../useCases/createRate";
import { listRateController } from "../useCases/listRate";

const rateRouter = Router();

rateRouter.use(EnsureAuthenticate);

rateRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createRateController.handle(request, response);
});

rateRouter.get('/list/:professionalId', (request: Request, response: Response): Promise<Response> => {
    return listRateController.handle(request, response);
});

export { rateRouter };