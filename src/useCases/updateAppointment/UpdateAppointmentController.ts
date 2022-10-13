import { Request, Response } from "express";
import { UpdateAppointmentUseCase } from "./UpdateAppointmentUseCase";

class UpdateAppointmentController {

    constructor(private updateAppointmentUseCase: UpdateAppointmentUseCase) {};

    async handle(request: Request, response: Response) {
            
        const { professionalId } = request.params;
        const data = {professionalId, ...request.body};

        try {

            await this.updateAppointmentUseCase.execute(data);
        
            return response.status(201).send();

        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
            
        };
            
    };

};

export { UpdateAppointmentController };