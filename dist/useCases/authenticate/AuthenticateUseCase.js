"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = require("dotenv");
const jsonwebtoken_1 = require("jsonwebtoken");
(0, dotenv_1.config)();
class AuthenticateUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ email, password }) {
        const existsUser = await this.userRepository.findByEmail(email);
        if (!existsUser) {
            throw new Error("User or password incorrect.");
        }
        ;
        const passwordMatch = await (0, bcryptjs_1.compare)(password, existsUser.password);
        if (!passwordMatch) {
            throw new Error("User or password incorrect.");
        }
        ;
        const stringfyUser = JSON.stringify(existsUser);
        const user = JSON.parse(stringfyUser);
        delete user.password;
        const token = (0, jsonwebtoken_1.sign)({}, process.env.SECRET_KEY, {
            subject: user['_id'],
            expiresIn: "90d",
        });
        return { user, token };
    }
    ;
}
exports.AuthenticateUseCase = AuthenticateUseCase;
;
