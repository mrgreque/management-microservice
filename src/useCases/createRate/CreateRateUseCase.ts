import { Rate } from "../../entities/Rate";
import { IRateRepository } from "../../repository/IRateRepository";
import { ICreateRateDTO } from "./CreateRateDTO";

class CreateRateUseCase {

    constructor(private rateRepository: IRateRepository) {};

    async execute(data: ICreateRateDTO) {

        if (!data.professionalId || !data.userId || !data.rate) {
            throw new Error("Missing data");
        };

        const rate = new Rate(data);

        await this.rateRepository.create(rate);
    };

};

export { CreateRateUseCase };