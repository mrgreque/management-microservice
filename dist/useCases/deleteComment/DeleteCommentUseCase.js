"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentUseCase = void 0;
class DeleteCommentUseCase {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    ;
    async execute(data) {
        const commentExists = await this.commentRepository.findById(data.id);
        if (!commentExists) {
            throw new Error("Comment not found");
        }
        ;
        await this.commentRepository.delete(data.id);
    }
    ;
}
exports.DeleteCommentUseCase = DeleteCommentUseCase;
;
