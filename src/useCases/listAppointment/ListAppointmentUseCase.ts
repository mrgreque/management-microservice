import { IListAppointmentDTO } from './ListAppointmentDTO';
import { IAppointmentRepository } from "../../repository/IAppointmentRepository";

class ListAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: IListAppointmentDTO) {

        const appointments = await this.appointmentRepository.findByProfessionalId(data.professionalId);

        if (!appointments) {
            throw new Error('Appointment not found.');
        };

        return appointments;

    };

};

export { ListAppointmentUseCase };