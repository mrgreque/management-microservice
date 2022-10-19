"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserAppointmentUseCase = void 0;
class ListUserAppointmentUseCase {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    ;
    async execute(data) {
        const appointments = await this.appointmentRepository.findByUserId();
        let userAppointments = [];
        await Promise.all(appointments.map(async (appointment) => {
            return await Promise.all(Object.values(appointment.appointments).map(async (userAppointment) => {
                return await Promise.all(userAppointment.map(async (ap) => {
                    if (ap.user_id === data.userId) {
                        userAppointments.push(ap);
                    }
                }));
            }));
        }));
        return userAppointments;
    }
    ;
}
exports.ListUserAppointmentUseCase = ListUserAppointmentUseCase;
;
