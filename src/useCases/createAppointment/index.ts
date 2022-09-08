import { MongoAppointmentRepository } from "../../repository/implementation/MongoAppointmentRepository";
import { CreateAppointmentController } from "./CreateAppointmentController";
import { CreateAppointmentUseCase } from "./CreateAppointmentUseCase";

const appointmentRepository = new MongoAppointmentRepository();
const createAppointmentUseCase = new CreateAppointmentUseCase(appointmentRepository);
const createAppointmentController = new CreateAppointmentController(createAppointmentUseCase);

export { createAppointmentUseCase, createAppointmentController };