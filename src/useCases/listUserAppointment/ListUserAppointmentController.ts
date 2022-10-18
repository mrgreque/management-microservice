import { Request, Response } from "express";
import { ListUserAppointmentUseCase } from "./ListUserAppointmentUseCase";

class ListUserAppointmentController {

    constructor(private ListUserAppointmentUseCase: ListUserAppointmentUseCase) {};

    async handle(request: Request, response: Response) {
        const {userId} = request.params;

        try {
            
            const appointments = await this.ListUserAppointmentUseCase.execute({userId});
            return response.status(200).json(appointments);

        } catch (error) {

            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
            
        };
    };

};

export { ListUserAppointmentController };