import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    constructor(private createUserUseCase: CreateUserUseCase) {};

    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        try {
            await this.createUserUseCase.execute(data);
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        };
    };

};

export { CreateUserController };