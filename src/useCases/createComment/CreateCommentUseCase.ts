import { Comment } from "../../entities/Comment";
import { ICommentRepository } from "../../repository/ICommentRepository";
import { ICreateCommentDTO } from "./CreateCommentDTO";

class CreateCommentUseCase {

    constructor(private commentRepository: ICommentRepository) {};

    async execute(data: ICreateCommentDTO) {

        if (!data.professionalId || !data.userId || !data.comment) {
            throw new Error("Missing data");
        };

        const comment = new Comment({
            visible: true,
            ...data,
        });

        await this.commentRepository.create(comment);
    };

};

export { CreateCommentUseCase };