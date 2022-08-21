import { IUSerRepository } from "../IUserRepository";
import { client } from "../../provider/client";
import { User } from "../../entities/User";

class KnexUserRepository implements IUSerRepository {

    async create(data: User): Promise<void> {
        await client('users').insert(data);
    };

    async findByEmail(email: string): Promise<User> {
        const user = await client('users').where({ email }).first();
        return user;
    };

};

export { KnexUserRepository };