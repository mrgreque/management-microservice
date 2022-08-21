import { Request, Response } from 'express';
import { AuthenticateUseCase } from "./AuthenticateUseCase";

class AuthenticateController {

    constructor(private authenticateUseCase: AuthenticateUseCase) {};

    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        try {
            const access = await this.authenticateUseCase.execute(data);
            return response.status(200).json({
                signed: true,
                ...access,
                message: "User authenticated successfully."
            });
        } catch (error) {
            return response.status(400).json({
                signed: false,
                token: null,
                user: {},
                message: error.message || 'Unexpected error.'
            });
        }
        
    }

};

export { AuthenticateController };