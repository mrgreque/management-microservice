import { IUSerRepository } from "../../repository/IUserRepository";
import { IUpdateUserDTO } from "./UpdateUserDTO";

class UpdateUserUseCase {

    constructor(private userRepository: IUSerRepository) {};

    async execute(data: IUpdateUserDTO): Promise<void> {

        const userExists = await this.userRepository.findById(data.id);

        if (!userExists) {
            throw new Error('User not found.');
        };

        const stringfyUser = JSON.stringify(userExists);
        const user = JSON.parse(stringfyUser);
        delete user.password;

        const userUpdated = {...user, ...data};

        await this.userRepository.update(userUpdated);
    };

};

export { UpdateUserUseCase };