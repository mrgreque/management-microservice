"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    ;
    async handle(request, response) {
        const { id } = request.params;
        try {
            await this.deleteUserUseCase.execute({ id });
            return response.status(204).send();
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
exports.DeleteUserController = DeleteUserController;
;
