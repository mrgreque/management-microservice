import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createAppointmentController } from "../useCases/createAppointment";
import { listAppointmentController } from "../useCases/listAppointment";

const appointmentRouter = Router();

appointmentRouter.use(EnsureAuthenticate);

appointmentRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createAppointmentController.handle(request, response);
});

appointmentRouter.get('/list/:professionalId', (request: Request, response: Response): Promise<Response> => {
    return listAppointmentController.handle(request, response);
});

export { appointmentRouter };