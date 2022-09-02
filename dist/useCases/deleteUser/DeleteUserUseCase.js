"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
class DeleteUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        try {
            const userExists = await this.userRepository.findById(data.id);
        }
        catch (error) {
            throw new Error('User not found.');
        }
        ;
        await this.userRepository.delete(data.id);
    }
    ;
}
exports.DeleteUserUseCase = DeleteUserUseCase;
;
