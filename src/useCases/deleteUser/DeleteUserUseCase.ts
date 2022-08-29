import { IUSerRepository } from "../../repository/IUserRepository";
import { IDeleteUserDTO } from "./DeleteUserDTO";

class DeleteUserUseCase {

    constructor (private userRepository: IUSerRepository) {};

    async execute(data: IDeleteUserDTO): Promise<void> {

        try {
            const userExists = await this.userRepository.findById(data.id);
        } catch (error) {
            throw new Error('User not found.');
        };

        await this.userRepository.delete(data.id);
    };
};

export { DeleteUserUseCase };