"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentController = void 0;
class CreateCommentController {
    constructor(createCommentUseCase) {
        this.createCommentUseCase = createCommentUseCase;
    }
    ;
    async handle(request, response) {
        const data = request.body;
        try {
            await this.createCommentUseCase.execute(data);
            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
        ;
    }
    ;
}
exports.CreateCommentController = CreateCommentController;
;
