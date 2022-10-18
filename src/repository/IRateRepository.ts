import { Comment } from "../entities/Comment";
import { Rate } from "../entities/Rate";

export interface IRateRepository {
    create(data: Rate): Promise<void>;
    findByProfessionalId(id: string): Promise<Rate[]>;
};