import { IListUserAppointmentDTO } from './ListUserAppointmentDTO';
import { IAppointmentRepository } from "../../repository/IAppointmentRepository";

class ListUserAppointmentUseCase {

    constructor(private appointmentRepository: IAppointmentRepository) {};

    async execute(data: IListUserAppointmentDTO) {
        const appointments = await this.appointmentRepository.findByUserId();

        let userAppointments = {
            'appointments': {}
        }; 

        await Promise.all(
            appointments.map(async appointment => {
                return await Promise.all(
                    Object.keys(appointment.appointments).map(async dateAppointment => {
                        return await Promise.all(
                            appointment.appointments[dateAppointment].map(async (ap, indx) => {
                                if (ap.user_id === data.userId) {
                                    if (userAppointments['appointments'].hasOwnProperty(dateAppointment)) {
                                        userAppointments['appointments'][dateAppointment].push(ap);
                                    } else {
                                        userAppointments['appointments'][dateAppointment] = [ap];
                                    }
                                    
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