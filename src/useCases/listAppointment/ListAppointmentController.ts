import { Request, Response } from "express";
import { ListAppointmentUseCase } from "./ListAppointmentUseCase";

class ListAppointmentController {

    constructor(private listAppointmentUseCase: ListAppointmentUseCase) {};

    async handle(request: Request, response: Response) {
        
        const { professionalId } = request.params;

        try {

            const appointments = await this.listAppointmentUseCase.execute({ professionalId });

            return response.status(200).json(appointments);

        } catch (error) {

            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });

        };

    };

};

export { ListAppointmentController };