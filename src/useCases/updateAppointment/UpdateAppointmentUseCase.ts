import { IAppointmentRepository } from "../../repository/IAppointmentRepository";
import { IUpdateAppointmentDTO } from "./UpdateAppointmentDTO";

class UpdateAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: IUpdateAppointmentDTO) {

        const existsAppointment = await this.appointmentRepository.findByProfessionalId(data.professionalId);

        if (existsAppointment) {

            console.log(existsAppointment.appointments[data.lastDate])
            console.log(existsAppointment.appointments[data.lastDate].length)

            if (existsAppointment.appointments[data.lastDate].length === 1) {
                delete existsAppointment.appointments[data.lastDate];
                existsAppointment.appointments[data.date] ? 
                existsAppointment.appointments[data.date].push(data.appointment) 
                :
                existsAppointment.appointments[data.date] = [data.appointment];
            } else {
                console.log('entrei por aqui')
                existsAppointment.appointments[data.lastDate] = existsAppointment.appointments[data.lastDate].map(appointment => {
                    if (appointment.id !== data.appointment.id) {
                        return appointment
                    };
                }).filter(appointment => appointment !== undefined);

                console.log(existsAppointment)
                
                existsAppointment.appointments[data.date] ? 
                existsAppointment.appointments[data.date].push(data.appointment) 
                :
                existsAppointment.appointments[data.date] = [data.appointment];
            };

            await this.appointmentRepository.update(existsAppointment);

        } else {

            throw new Error('Appointment not found.');

        };

    };

};

export { UpdateAppointmentUseCase };