import { User } from "../entities/User";

export interface IUSerRepository {
    create(data: User): Promise<void>;
    findByEmail(email: string): Promise<User>;
};