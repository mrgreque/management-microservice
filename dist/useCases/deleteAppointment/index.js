"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointmentController = exports.deleteAppointmentUseCase = void 0;
const MongoAppointmentRepository_1 = require("../../repository/implementation/MongoAppointmentRepository");
const DeleteAppointmentController_1 = require("./DeleteAppointmentController");
const DeleteAppointmentUseCase_1 = require("./DeleteAppointmentUseCase");
const appointmentRepository = new MongoAppointmentRepository_1.MongoAppointmentRepository();
const deleteAppointmentUseCase = new DeleteAppointmentUseCase_1.DeleteAppointmentUseCase(appointmentRepository);
exports.deleteAppointmentUseCase = deleteAppointmentUseCase;
const deleteAppointmentController = new DeleteAppointmentController_1.DeleteAppointmentController(deleteAppointmentUseCase);
exports.deleteAppointmentController = deleteAppointmentController;