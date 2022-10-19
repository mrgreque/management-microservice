import { ICommentRepository } from "../../repository/ICommentRepository";
import { IUSerRepository } from "../../repository/IUserRepository";

class ListCommentUseCase {

    constructor(private commentRepository: ICommentRepository, private userRepository: IUSerRepository) {}

    async execute(data: any): Promise<Comment[]> {

        let query = {};
        query[data.search] = data.value;

        let comments;
        if (data.value && data.search) {
            comments = await this.commentRepository.search(query);
        } else {
            comments = await this.commentRepository.findAll();
        };

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
    };

};

export { ListCommentUseCase };