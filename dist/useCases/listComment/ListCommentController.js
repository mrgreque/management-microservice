"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommentController = void 0;
class ListCommentController {
    constructor(listCommentUseCase) {
        this.listCommentUseCase = listCommentUseCase;
    }
    async handle(request, response) {
        const { value, search } = request.params;
        let data;
        if (value && search) {
            data = { value, search };
        }
        else {
            data = {};
        }
        ;
        try {
            const comments = await this.listCommentUseCase.execute(data);
            return response.json(comments);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
        ;
    }
    ;
}
exports.ListCommentController = ListCommentController;
;
