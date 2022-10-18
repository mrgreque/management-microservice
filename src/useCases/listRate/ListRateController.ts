import { Request, Response } from "express";
import { ListRateUseCase } from "./ListRateUseCase";

class ListRateController {

    constructor(private listRateUseCase: ListRateUseCase) {};
    
    async handle(request: Request, response: Response) {

        const { professionalId } = request.params;

        try {

            const rates = await this.listRateUseCase.execute({ professionalId });
            return response.status(200).json(rates);

        } catch (error) {
                
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
            
        };

    };

};

export { ListRateController };