import { hash } from "bcryptjs";
import { User } from "../../entities/User";
import { IUSerRepository } from "../../repository/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

class CreateUserUseCase {

    constructor(private userRepository: IUSerRepository) {};

    async execute(data: ICreateUserDTO): Promise<void> {

        const emailAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (emailAlreadyExists) {
            throw new Error('Email already exists.');
        };

        const hashedPassword = await hash(data.password, 12);
        data.password = hashedPassword;

        const user = new User(data);
        await this.userRepository.create(user);
    };

};

export { CreateUserUseCase };