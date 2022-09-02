"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        const userExists = await this.userRepository.findById(data.id);
        if (!userExists) {
            throw new Error('User not found.');
        }
        ;
        const stringfyUser = JSON.stringify(userExists);
        const user = JSON.parse(stringfyUser);
        delete user.password;
        const userUpdated = { ...user, ...data };
        await this.userRepository.update(userUpdated);
    }
    ;
}
exports.UpdateUserUseCase = UpdateUserUseCase;
;
