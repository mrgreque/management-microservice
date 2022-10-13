import { Request, Response, Router } from "express";
import { EnsureAuthenticate } from "../middleware/EnsureAuthenticate";
import { createAppointmentController } from "../useCases/createAppointment";
import { deleteAppointmentController } from "../useCases/deleteAppointment";
import { listAppointmentController } from "../useCases/listAppointment";
import { updateAppointmentController } from "../useCases/updateAppointment";

const appointmentRouter = Router();

appointmentRouter.use(EnsureAuthenticate);

appointmentRouter.post('/create', (request: Request, response: Response): Promise<Response> => {
    return createAppointmentController.handle(request, response);
});

appointmentRouter.get('/list/:professionalId', (request: Request, response: Response): Promise<Response> => {
    return listAppointmentController.handle(request, response);
});

appointmentRouter.put('/update/:professionalId', (request: Request, response: Response): Promise<Response> => {
    return updateAppointmentController.handle(request, response);
});

appointmentRouter.delete('/delete', (request: Request, response: Response) => {
    return deleteAppointmentController.handle(request, response);
});

export { appointmentRouter };