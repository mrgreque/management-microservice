"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAppointmentRepository = void 0;
const AppointmentModel_1 = require("../../models/AppointmentModel");
class MongoAppointmentRepository {
    async create(data) {
        await AppointmentModel_1.AppointmentModel.create(data);
    }
    ;
    async findByProfessionalId(professionalId) {
        const appointment = await AppointmentModel_1.AppointmentModel.findOne({ professionalId });
        return appointment;
    }
    ;
    async findByUserId() {
        const appointments = await AppointmentModel_1.AppointmentModel.find();
        return appointments;
    }
    ;
    async findByProfessionalAndUserId(professionalId, userId) {
        const appointment = await AppointmentModel_1.AppointmentModel.findOne({ professionalId, userId });
        return appointment;
    }
    ;
    async update(data) {
        await AppointmentModel_1.AppointmentModel.updateOne({ professionalId: data.professionalId }, { appointments: data.appointments });
    }
    ;
}
exports.MongoAppointmentRepository = MongoAppointmentRepository;
;
