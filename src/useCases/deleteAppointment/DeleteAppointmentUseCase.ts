import { IDeleteAppointmentDTO } from './DeleteAppointmentDTO';
import { IAppointmentRepository } from './../../repository/IAppointmentRepository';
class DeleteAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: IDeleteAppointmentDTO) {

        const existsAppointment = await this.appointmentRepository.findByProfessionalId(data.professionalId);

        if (existsAppointment) {

            if (existsAppointment.appointments[data.date].length === 1) {
                delete existsAppointment.appointments[data.date];
            } else {
                existsAppointment.appointments[data.date] = existsAppointment.appointments[data.date].map(appointment => {
                    if (appointment.id !== data.appointmentId) {
                        return appointment
                    };
                }).filter(appointment => appointment !== undefined);
            }

            await this.appointmentRepository.update(existsAppointment);

        } else {

            throw new Error('Appointment not found.');

        };

    };

};

export { DeleteAppointmentUseCase };