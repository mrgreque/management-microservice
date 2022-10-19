"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentUseCase = void 0;
const Comment_1 = require("../../entities/Comment");
class CreateCommentUseCase {
    constructor(commentRepository, userRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        if (!data.professionalId || !data.userId || !data.comment) {
            throw new Error("Missing data");
        }
        ;
        const userExists = await this.userRepository.findById(data.userId);
        const professionalExists = await this.userRepository.findById(data.professionalId);
        if (!userExists) {
            throw new Error("User does not exists");
        }
        else if (!professionalExists) {
            throw new Error("Professional does not exists");
        }
        ;
        const comment = new Comment_1.Comment({
            visible: true,
            ...data,
        });
        await this.commentRepository.create(comment);
    }
    ;
}
exports.CreateCommentUseCase = CreateCommentUseCase;
;
