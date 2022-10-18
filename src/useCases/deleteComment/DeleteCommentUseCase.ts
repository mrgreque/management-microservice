import { IDeleteCommentDTO } from './DeleteCommentDTO';
import { ICommentRepository } from "../../repository/ICommentRepository";

class DeleteCommentUseCase {

    constructor(private commentRepository: ICommentRepository) {};

    async execute(data: IDeleteCommentDTO) {

        const commentExists = await this.commentRepository.findById(data.id);

        if (!commentExists) {
            throw new Error("Comment not found");
        };

        await this.commentRepository.delete(data.id);

    };

};

export { DeleteCommentUseCase };