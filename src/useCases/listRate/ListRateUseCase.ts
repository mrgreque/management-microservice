import { IListRateDTO } from './ListRateDTO';
import { IRateRepository } from "../../repository/IRateRepository";
import { IUSerRepository } from '../../repository/IUserRepository';

class ListRateUseCase {

    constructor(private rateRepository: IRateRepository, private userRepository: IUSerRepository) {};

    async execute(data: IListRateDTO) {
        
        const userExists = await this.userRepository.findById(data.professionalId);

        if (!userExists) {
            throw new Error("User not found");
        };

        const rates = await this.rateRepository.findByProfessionalId(data.professionalId);

        const totalRates = rates.length;
        const totalRate = rates.reduce((total, rate) => total + rate.rate, 0);
        const averageRate = totalRate / totalRates;

        return { averageRate: averageRate.toFixed(2) };

    };

};

export { ListRateUseCase };