import { Comment } from "../../entities/Comment";
import { ICommentRepository } from "../../repository/ICommentRepository";
import { IUSerRepository } from "../../repository/IUserRepository";
import { ICreateCommentDTO } from "./CreateCommentDTO";

class CreateCommentUseCase {

    constructor(private commentRepository: ICommentRepository, private userRepository: IUSerRepository) {};

    async execute(data: ICreateCommentDTO) {

        if (!data.professionalId || !data.userId || !data.comment) {
            throw new Error("Missing data");
        };

        const userExists = await this.userRepository.findById(data.userId);
        const professionalExists = await this.userRepository.findById(data.professionalId);

        if (!userExists) {
            throw new Error("User does not exists");
        } else if (!professionalExists) {
            throw new Error("Professional does not exists");
        };

        const comment = new Comment({
            visible: true,
            ...data,
        });

        await this.commentRepository.create(comment);
    };

};

export { CreateCommentUseCase };