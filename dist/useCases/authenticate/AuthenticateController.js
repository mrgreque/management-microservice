"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateController = void 0;
class AuthenticateController {
    constructor(authenticateUseCase) {
        this.authenticateUseCase = authenticateUseCase;
    }
    ;
    async handle(request, response) {
        const data = request.body;
        try {
            const access = await this.authenticateUseCase.execute(data);
            return response.status(200).json({
                signed: true,
                ...access,
                message: "User authenticated successfully."
            });
        }
        catch (error) {
            return response.status(400).json({
                signed: false,
                token: null,
                user: {},
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.AuthenticateController = AuthenticateController;
;
