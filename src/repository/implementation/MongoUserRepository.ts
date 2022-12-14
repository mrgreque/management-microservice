import { User } from './../../entities/User';
import { IUSerRepository } from "../IUserRepository";
import { UserModel } from '../../models/UserModel';

class MongoUserRepository implements IUSerRepository {

    async create(data: User): Promise<void> {
        await UserModel.create(data);
    };

    async findByEmail(email: string): Promise<User> {
        const user = await UserModel.findOne({ email });
        return user;
    };

    async findByCpf(cpf: string): Promise<User> {
        const user = await UserModel.findOne({ cpf }, {'password': 0});
        return user;
    };

    async findAll(): Promise<User[]> {
        const users = await UserModel.find({}, {'password': 0});
        return users;
    };

    async findBySearch(query: object): Promise<User[]> {
        const users = await UserModel.find(query, {'password': 0})
        return users;
    };

    async findById(id: string): Promise<User> {
        const user = await UserModel.findById(id, {'password': 0});
        return user;
    };

    async delete(id: string): Promise<void> {
        await UserModel.updateOne({ _id: id }, { active: false });
    };

    async update(data: User): Promise<void> {
        await UserModel.updateOne({ _id: data.id }, data);
    };

};

export { MongoUserRepository };