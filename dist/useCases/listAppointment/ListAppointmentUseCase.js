"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppointmentUseCase = void 0;
class ListAppointmentUseCase {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    ;
    async execute(data) {
        const appointments = await this.appointmentRepository.findByProfessionalId(data.professionalId);
        if (!appointments) {
            throw new Error('Appointment not found.');
        }
        ;
        return appointments;
    }
    ;
}
exports.ListAppointmentUseCase = ListAppointmentUseCase;
;
