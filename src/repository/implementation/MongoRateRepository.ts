import { Rate } from "../../entities/Rate";
import { RateModel } from "../../models/RateModel";
import { IRateRepository } from "../IRateRepository";

class MongoRateRepository implements IRateRepository {

    async create(data: Rate): Promise<void> {
        await RateModel.create(data);
    };

    async findByProfessionalId(id: string): Promise<Rate[]> {
        const rates = await RateModel.find({ professionalId: id });
        return rates;
    };

};

export { MongoRateRepository };