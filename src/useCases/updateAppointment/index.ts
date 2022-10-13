import { MongoAppointmentRepository } from "../../repository/implementation/MongoAppointmentRepository";
import { UpdateAppointmentController } from "./UpdateAppointmentController";
import { UpdateAppointmentUseCase } from "./UpdateAppointmentUseCase";

const appointmentRepository = new MongoAppointmentRepository();
const updateAppointmentUseCase = new UpdateAppointmentUseCase(appointmentRepository);
const updateAppointmentController = new UpdateAppointmentController(updateAppointmentUseCase);

export { updateAppointmentUseCase, updateAppointmentController };