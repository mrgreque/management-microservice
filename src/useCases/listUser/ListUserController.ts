import { request, Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {

    constructor(private listUserUseCase: ListUserUseCase) {};

    async handle(request: Request, response: Response): Promise<Response> {

        let data = request.body;

        if (request.params.id)  {
            data = {...data, id: request.params.id};
        };
        
        try {
            const users = await this.listUserUseCase.execute(data);
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };

};

export { ListUserController };