import { Request, Response } from "express";
import { CreateAppointmentUseCase } from "./CreateAppointmentUseCase";

class CreateAppointmentController {
    
    constructor(private createAppointmentUseCase: CreateAppointmentUseCase) {};
    
    async handle(request: Request, response: Response) {
            
        const data = request.body;

        try {
            
            await this.createAppointmentUseCase.execute(data);
        
            return response.status(201).send();

        } catch (error) {
            
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
            
        };
        
    };

};

export { CreateAppointmentController };