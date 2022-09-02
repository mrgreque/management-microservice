"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
class ListUserController {
    constructor(listUserUseCase) {
        this.listUserUseCase = listUserUseCase;
    }
    ;
    async handle(request, response) {
        let data = {};
        if (request.params.id) {
            data = { id: request.params.id };
        }
        else if (request.params.search || request.query.role) {
            data = { search: request.params.search, role: request.query.role };
        }
        ;
        try {
            const users = await this.listUserUseCase.execute(data);
            return response.status(200).json(users);
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
exports.ListUserController = ListUserController;
;
