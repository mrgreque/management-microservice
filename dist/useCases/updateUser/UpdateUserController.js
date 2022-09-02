"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    ;
    async handle(request, response) {
        const id = request.params.id;
        const data = request.body;
        try {
            const user = await this.updateUserUseCase.execute({ id, ...data });
            return response.status(200).json(user);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
        ;
    }
    ;
}
exports.UpdateUserController = UpdateUserController;
;
