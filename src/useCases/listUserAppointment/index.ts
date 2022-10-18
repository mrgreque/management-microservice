import { MongoAppointmentRepository } from "../../repository/implementation/MongoAppointmentRepository";
import { ListUserAppointmentController } from "./ListUserAppointmentController";
import { ListUserAppointmentUseCase } from "./ListUserAppointmentUseCase";

const appointmentRepository = new MongoAppointmentRepository();
const listUserAppointmentUseCase = new ListUserAppointmentUseCase(appointmentRepository);
const listUserAppointmentController = new ListUserAppointmentController(listUserAppointmentUseCase);

export { listUserAppointmentController };