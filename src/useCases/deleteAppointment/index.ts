import { MongoAppointmentRepository } from "../../repository/implementation/MongoAppointmentRepository";
import { DeleteAppointmentController } from "./DeleteAppointmentController";
import { DeleteAppointmentUseCase } from "./DeleteAppointmentUseCase";

const appointmentRepository = new MongoAppointmentRepository();
const deleteAppointmentUseCase = new DeleteAppointmentUseCase(appointmentRepository);
const deleteAppointmentController = new DeleteAppointmentController(deleteAppointmentUseCase);

export { deleteAppointmentUseCase, deleteAppointmentController };