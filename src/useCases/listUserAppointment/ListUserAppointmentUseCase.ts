import { IListUserAppointmentDTO } from './ListUserAppointmentDTO';
import { IAppointmentRepository } from "../../repository/IAppointmentRepository";

class ListUserAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: IListUserAppointmentDTO) {
        const appointments = await this.appointmentRepository.findByUserId();

        let userAppointments = []; 

        await Promise.all(
            appointments.map(async appointment => {
                return await Promise.all(
                    Object.keys(appointment.appointments).map(async userAppointment => {
                        return await Promise.all(
                            appointment.appointments[userAppointment].map(async (ap, indx) => {
                                if (ap.user_id === data.userId) {
                                    userAppointments.push({date: userAppointment ,...ap});
                                }
                            })
                        );
                    })
                )
            })
        );

        return userAppointments;
    };

};

export { ListUserAppointmentUseCase };