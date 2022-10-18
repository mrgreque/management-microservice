import { Comment } from "../entities/Comment";

export interface ICommentRepository {
    create(data: Comment): Promise<void>;
    findById(id: string): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    search(data: object): Promise<Comment[]>;
    delete(id: string): Promise<void>;
};