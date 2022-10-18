import { ICommentRepository } from "../../repository/ICommentRepository";

class ListCommentUseCase {

    constructor(private commentRepository: ICommentRepository) {}

    async execute(data: any): Promise<Comment[]> {

        let query = {};
        query[data.search] = data.value;

        let comments;
        if (data.value && data.search) {
            comments = await this.commentRepository.search(query);
        } else {
            comments = await this.commentRepository.findAll();
        };

        return comments;
    };

};

export { ListCommentUseCase };