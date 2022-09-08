import { Appointment } from './../entities/Appointment';

export interface IAppointmentRepository {
    create(data: Appointment): Promise<void>;
    findByProfessionalId(professionalId: string): Promise<Appointment>;
    findByUserId(userId: string): Promise<Appointment[]>;
    findByProfessionalAndUserId(professionalId: string, userId: string): Promise<Appointment>;
    update(data: Appointment): Promise<void>;
}