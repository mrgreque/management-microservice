"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointmentUseCase = void 0;
const uuidv4_1 = require("uuidv4");
const Appointment_1 = require("./../../entities/Appointment");
class CreateAppointmentUseCase {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    ;
    async execute(data) {
        const existsAppointment = await this.appointmentRepository.findByProfessionalId(data.professionalId);
        data.appointment = {
            id: (0, uuidv4_1.uuid)(),
            ...data.appointment
        };
        if (existsAppointment) {
            if (existsAppointment.appointments[data.date]) {
                existsAppointment.appointments[data.date].push(data.appointment);
            }
            else {
                existsAppointment.appointments[data.date] = [data.appointment];
            }
            ;
            await this.appointmentRepository.update(existsAppointment);
        }
        else {
            const appointment = new Appointment_1.Appointment({
                professionalId: data.professionalId,
                appointments: {
                    [data.date]: [data.appointment]
                }
            });
            await this.appointmentRepository.create(appointment);
        }
        ;
    }
    ;
}
exports.CreateAppointmentUseCase = CreateAppointmentUseCase;
;
