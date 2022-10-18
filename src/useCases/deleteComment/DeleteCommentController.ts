import { Request, Response } from "express";
import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

class DeleteCommentController {

    constructor(private deleteCommentUseCase: DeleteCommentUseCase) {};

    async handle(request: Request, response: Response) {
            
        const {id} = request.params;

        try {
            
            await this.deleteCommentUseCase.execute({id});
            return response.status(200).send();

        } catch (error) {
                
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
            
        };
    
    };

};

export { DeleteCommentController };