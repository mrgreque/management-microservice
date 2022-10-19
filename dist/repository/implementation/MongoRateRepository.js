"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRateRepository = void 0;
const RateModel_1 = require("../../models/RateModel");
class MongoRateRepository {
    async create(data) {
        await RateModel_1.RateModel.create(data);
    }
    ;
    async findByProfessionalId(id) {
        const rates = await RateModel_1.RateModel.find({ professionalId: id });
        return rates;
    }
    ;
}
exports.MongoRateRepository = MongoRateRepository;
;
