"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRateUseCase = void 0;
const Rate_1 = require("../../entities/Rate");
class CreateRateUseCase {
    constructor(rateRepository, userRepository) {
        this.rateRepository = rateRepository;
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        if (!data.professionalId || !data.userId || !data.rate) {
            throw new Error("Missing data");
        }
        ;
        const userExists = await this.userRepository.findById(data.userId);
        const professionalExists = await this.userRepository.findById(data.professionalId);
        if (!userExists) {
            throw new Error("User does not exists");
        }
        else if (!professionalExists) {
            throw new Error("Professional does not exists");
        }
        ;
        const rate = new Rate_1.Rate(data);
        await this.rateRepository.create(rate);
    }
    ;
}
exports.CreateRateUseCase = CreateRateUseCase;
;
