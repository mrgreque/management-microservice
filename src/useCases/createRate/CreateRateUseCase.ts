import { Rate } from "../../entities/Rate";
import { IRateRepository } from "../../repository/IRateRepository";
import { IUSerRepository } from "../../repository/IUserRepository";
import { ICreateRateDTO } from "./CreateRateDTO";

class CreateRateUseCase {

    constructor(private rateRepository: IRateRepository, private userRepository: IUSerRepository) {};

    async execute(data: ICreateRateDTO) {

        if (!data.professionalId || !data.userId || !data.rate) {
            throw new Error("Missing data");
        };

        const userExists = await this.userRepository.findById(data.userId);
        const professionalExists = await this.userRepository.findById(data.professionalId);

        if (!userExists) {
            throw new Error("User does not exists");
        } else if (!professionalExists) {
            throw new Error("Professional does not exists");
        };

        const rate = new Rate(data);

        await this.rateRepository.create(rate);
    };

};

export { CreateRateUseCase };