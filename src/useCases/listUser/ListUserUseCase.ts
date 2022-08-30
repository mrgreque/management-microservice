import { User } from "../../entities/User";
import { IUSerRepository } from "../../repository/IUserRepository";
import { IListUserDTO } from "./ListUserDTO";

class ListUserUseCase {

    constructor(private userRepository: IUSerRepository) {};

    async execute(data: IListUserDTO): Promise<User[]> {

        if (!data.id && !data.search) {

            const users = await this.userRepository.findAll();
            return users;

        } else if (data.id) {

            const user = await this.userRepository.findById(data.id);
            return [user];

        } else if (data.search) {

            const users = await this.userRepository.findBySearch(data.search);
            return users;

        };

    };

};

export { ListUserUseCase };