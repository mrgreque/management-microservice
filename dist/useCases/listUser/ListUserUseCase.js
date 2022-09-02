"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUseCase = void 0;
class ListUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        console.log(data);
        if (data.id) {
            const user = await this.userRepository.findById(data.id);
            return [user];
        }
        else if (data.search || data.role) {
            let query = {};
            data.search ? query['$or'] = [
                { name: { $regex: data.search, $options: "i" } },
                { email: { $regex: data.search, $options: "i" } }
            ] : null;
            data.role ? query['role'] = data.role : null;
            const users = await this.userRepository.findBySearch(query);
            return users;
        }
        else {
            const users = await this.userRepository.findAll();
            return users;
        }
        ;
    }
    ;
}
exports.ListUserUseCase = ListUserUseCase;
;
