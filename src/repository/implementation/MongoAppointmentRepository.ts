import { Appointment } from './../../entities/Appointment';
import { AppointmentModel } from '../../models/AppointmentModel';
import { IAppointmentRepository } from './../IAppointmentRepository';

class MongoAppointmentRepository implements IAppointmentRepository {

    async create(data: Appointment): Promise<void> {
        await AppointmentModel.create(data);
    };

    async findByProfessionalId(professionalId: string): Promise<Appointment> {
        const appointment = await AppointmentModel.findOne({ professionalId });
        return appointment;
    };

    async findByUserId(userId: string): Promise<Appointment[]> {
        const appointments = await AppointmentModel.find({ userId });
        return appointments;
    };

    async findByProfessionalAndUserId(professionalId: string, userId: string): Promise<Appointment> {
        const appointment = await AppointmentModel.findOne({ professionalId, userId });
        return appointment;
    };

    async update(data: any): Promise<void> {
        await AppointmentModel.updateOne({ professionalId: data.professionalId }, {appointments: data.appointments});
    };

};

export { MongoAppointmentRepository };