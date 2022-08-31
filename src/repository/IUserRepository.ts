import { User } from "../entities/User";

export interface IUSerRepository {
    create(data: User): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findByCpf(cpf: string): Promise<User>;
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    findBySearch(query: object): Promise<User[]>;
    delete(id: string): Promise<void>;
    update(data: User): Promise<void>;
};