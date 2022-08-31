import { User } from "../../entities/User";
import { IUSerRepository } from "../../repository/IUserRepository";
import { IListUserDTO } from "./ListUserDTO";

class ListUserUseCase {

    constructor(private userRepository: IUSerRepository) {};

    async execute(data: IListUserDTO): Promise<User[]> {

        console.log(data)

        if (data.id) {

            const user = await this.userRepository.findById(data.id);
            return [user];

        } else if (data.search || data.role) {

            let query = {};

            data.search ? query['$or'] = [
                { name: { $regex: data.search, $options: "i" } },
                { email: { $regex: data.search, $options: "i" } }
            ] : null;
            data.role ? query['role'] = data.role : null;

            const users = await this.userRepository.findBySearch(query);

            return users;

        };

    };

};

export { ListUserUseCase };