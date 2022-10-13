import { Request, Response } from "express";
import { DeleteAppointmentUseCase } from "./DeleteAppointmentUseCase";

class DeleteAppointmentController {

    constructor(private deteteAppointmentUseCase: DeleteAppointmentUseCase) {};

    async handle(request: Request, response: Response) {
            
        const data = request.body;

        try {

            await this.deteteAppointmentUseCase.execute(data);

            return response.status(200).send();

        } catch (error) {

            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });

        };
    
    }

};

export { DeleteAppointmentController };