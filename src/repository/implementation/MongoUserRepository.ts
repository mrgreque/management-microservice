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
        const user = await UserModel.findOne({ cpf });
        return user;
    };

    async findAll(): Promise<User[]> {
        const users = await UserModel.find({});
        return users;
    };

    async findBySearch(search: string): Promise<User[]> {
        const users = await UserModel.find({'$or': [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } }
        ]});

        return users;
    };

    async findById(id: string): Promise<User> {
        const user = await UserModel.findById(id);
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