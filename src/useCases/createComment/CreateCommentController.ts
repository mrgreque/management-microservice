import { Request, Response } from "express";
import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {

    constructor(private createCommentUseCase: CreateCommentUseCase) {};

    async handle(request: Request, response: Response) {

        const data = request.body;

        try {
            
            await this.createCommentUseCase.execute(data);
            return response.status(201).send();

        } catch (error) {
                
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
            
        };

    };

};

export { CreateCommentController };