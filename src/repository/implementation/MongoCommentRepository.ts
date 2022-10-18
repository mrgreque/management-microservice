import { Comment } from "../../entities/Comment";
import { CommentModel } from "../../models/CommentModel";
import { ICommentRepository } from "../ICommentRepository";

class MongoCommentRepository implements ICommentRepository {
 
    async create(data: Comment): Promise<void> {
        await CommentModel.create(data);
    };

    async findById(id: string): Promise<Comment> {
        const comment = await CommentModel.findOne({ id });
        return comment;
    };

    async findAll(): Promise<Comment[]> {
        const comments = await CommentModel.find({ visible: true });
        return comments;
    };

    async search(data: object): Promise<Comment[]> {
        const comments = await CommentModel.find({ visible: true, ...data });
        return comments;    
    };

    async delete(id: string): Promise<void> {
        await CommentModel.updateOne({ '_id': id }, { visible: false });
    };

};

export { MongoCommentRepository };