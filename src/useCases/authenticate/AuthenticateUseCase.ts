import { compare } from 'bcryptjs';
import { config } from 'dotenv';
import { sign } from "jsonwebtoken";
import { IUSerRepository } from "../../repository/IUserRepository";
import { IAuthenticateDTO } from './AuthenticateDTO';

config();

class AuthenticateUseCase {
    constructor(private userRepository: IUSerRepository) {}
    
    async execute({email, password}: IAuthenticateDTO) {
        const existsEmail = await this.userRepository.findByEmail(email);
    
        if (!existsEmail) {
            throw new Error("User or password incorrect.");
        };
    
        const passwordMatch = await compare(password, existsEmail.password);
    
        if (!passwordMatch) {
            throw new Error("User or password incorrect.");
        };

        const stringfyUser = JSON.stringify(existsEmail);
        const user = JSON.parse(stringfyUser);
        delete user.password;

        const token = sign({}, process.env.SECRET_KEY, {
            subject: user.id,
            expiresIn: "1d",
        });
    
        return {user, token};
    };
};

export { AuthenticateUseCase };