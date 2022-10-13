import { uuid } from 'uuidv4';
import { Appointment } from './../../entities/Appointment';
import { ICreateAppointment } from './CreateAppointmentDTO';
import { IAppointmentRepository } from './../../repository/IAppointmentRepository';
class CreateAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: ICreateAppointment) {

        const existsAppointment = await this.appointmentRepository.findByProfessionalId(data.professionalId);

        data.appointment = {
            id: uuid(),
            ...data.appointment
        }

        console.log(data.appointment)

        if (existsAppointment) {

            if (existsAppointment.appointments[data.date]) {
                existsAppointment.appointments[data.date].push(data.appointment);
            } else {
                existsAppointment.appointments[data.date] = [data.appointment];
            };

            await this.appointmentRepository.update(existsAppointment);

        } else {

            const appointment = new Appointment({
                professionalId: data.professionalId,
                appointments: {
                    [data.date]: [data.appointment]
                }
            });

            await this.appointmentRepository.create(appointment);

        };
        
    };

};

export { CreateAppointmentUseCase };