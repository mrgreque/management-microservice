import { request, Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {

    constructor(private listUserUseCase: ListUserUseCase) {};

    async handle(request: Request, response: Response): Promise<Response> {

        let data = {};

        if (request.params.id)  {
            data = {id: request.params.id};
        } else {
            data = {search: request.params.search};
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