"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppointmentUseCase = void 0;
class DeleteAppointmentUseCase {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    ;
    async execute(data) {
        const existsAppointment = await this.appointmentRepository.findByProfessionalId(data.professionalId);
        if (existsAppointment) {
            if (existsAppointment.appointments[data.date].length === 1) {
                delete existsAppointment.appointments[data.date];
            }
            else {
                existsAppointment.appointments[data.date] = existsAppointment.appointments[data.date].map(appointment => {
                    if (appointment.id !== data.appointmentId) {
                        return appointment;
                    }
                    ;
                }).filter(appointment => appointment !== undefined);
            }
            await this.appointmentRepository.update(existsAppointment);
        }
        else {
            throw new Error('Appointment not found.');
        }
        ;
    }
    ;
}
exports.DeleteAppointmentUseCase = DeleteAppointmentUseCase;
;
