import { MongoAppointmentRepository } from "../../repository/implementation/MongoAppointmentRepository";
import { ListAppointmentController } from "./ListAppointmentController";
import { ListAppointmentUseCase } from "./ListAppointmentUseCase";

const appointmentRepository = new MongoAppointmentRepository();
const listAppointmentUseCase = new ListAppointmentUseCase(appointmentRepository);
const listAppointmentController = new ListAppointmentController(listAppointmentUseCase);

export { listAppointmentUseCase, listAppointmentController };