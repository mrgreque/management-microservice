"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRateUseCase = void 0;
class ListRateUseCase {
    constructor(rateRepository, userRepository) {
        this.rateRepository = rateRepository;
        this.userRepository = userRepository;
    }
    ;
    async execute(data) {
        const userExists = await this.userRepository.findById(data.professionalId);
        if (!userExists) {
            throw new Error("User not found");
        }
        ;
        const rates = await this.rateRepository.findByProfessionalId(data.professionalId);
        const totalRates = rates.length;
        const totalRate = rates.reduce((total, rate) => total + rate.rate, 0);
        const averageRate = totalRate / totalRates;
        return { averageRate: averageRate.toFixed(2) };
    }
    ;
}
exports.ListRateUseCase = ListRateUseCase;
;
