import { Request, Response } from "express";
import { ListCommentUseCase } from "./ListCommentUseCase";

class ListCommentController {

    constructor(private listCommentUseCase: ListCommentUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { value, search } = request.params;

        let data;
        if (value && search) {
            data = { value, search };
        } else {
            data = {};
        };

        try {
            const comments = await this.listCommentUseCase.execute(data);

            return response.json(comments);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        };
    };

};

export { ListCommentController };