"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentController = void 0;
class DeleteCommentController {
    constructor(deleteCommentUseCase) {
        this.deleteCommentUseCase = deleteCommentUseCase;
    }
    ;
    async handle(request, response) {
        const { id } = request.params;
        try {
            await this.deleteCommentUseCase.execute({ id });
            return response.status(200).send();
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
exports.DeleteCommentController = DeleteCommentController;
;
