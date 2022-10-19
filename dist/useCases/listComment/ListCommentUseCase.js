"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommentUseCase = void 0;
class ListCommentUseCase {
    constructor(commentRepository, userRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }
    async execute(data) {
        let query = {};
        query[data.search] = data.value;
        let comments;
        if (data.value && data.search) {
            comments = await this.commentRepository.search(query);
        }
        else {
            comments = await this.commentRepository.findAll();
        }
        ;
        comments = await Promise.all(comments.map(async (comment) => {
            const user = await this.userRepository.findById(comment.userId);
            comment['_doc']['user'] = {
                id: user.id,
                name: user.name,
                profilePhoto: user.profilePhoto
            };
            return comment;
        }));
        return comments;
    }
    ;
}
exports.ListCommentUseCase = ListCommentUseCase;
;
