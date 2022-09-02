"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const User_1 = require("../../entities/User");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        const emailAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (emailAlreadyExists) {
            throw new Error('Email already exists.');
        }
        ;
        const hashedPassword = await (0, bcryptjs_1.hash)(data.password, 12);
        data.password = hashedPassword;
        const user = new User_1.User(data);
        await this.userRepository.create(user);
    }
    ;
}
exports.CreateUserUseCase = CreateUserUseCase;
;
