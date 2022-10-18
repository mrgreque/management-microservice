import { Request, Response } from "express";
import { CreateRateUseCase } from "./CreateRateUseCase";

class CreateRateController {

    constructor(private createRateController: CreateRateUseCase) {};

    async handle(request: Request, response: Response) {
                
        const data = request.body;

        try {
            
            await this.createRateController.execute(data);
            return response.status(201).send();

        } catch (error) {
                
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
            
        };
    
    };

};

export { CreateRateController };