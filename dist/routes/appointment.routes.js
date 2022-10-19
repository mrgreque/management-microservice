"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRouter = void 0;
const express_1 = require("express");
const EnsureAuthenticate_1 = require("../middleware/EnsureAuthenticate");
const createAppointment_1 = require("../useCases/createAppointment");
const deleteAppointment_1 = require("../useCases/deleteAppointment");
const listAppointment_1 = require("../useCases/listAppointment");
const listUserAppointment_1 = require("../useCases/listUserAppointment");
const updateAppointment_1 = require("../useCases/updateAppointment");
const appointmentRouter = (0, express_1.Router)();
exports.appointmentRouter = appointmentRouter;
appointmentRouter.use(EnsureAuthenticate_1.EnsureAuthenticate);
appointmentRouter.post('/create', (request, response) => {
    return createAppointment_1.createAppointmentController.handle(request, response);
});
appointmentRouter.get('/list/:professionalId', (request, response) => {
    return listAppointment_1.listAppointmentController.handle(request, response);
});
appointmentRouter.get('/userlist/:userId', (request, response) => {
    return listUserAppointment_1.listUserAppointmentController.handle(request, response);
});
appointmentRouter.put('/update/:professionalId', (request, response) => {
    return updateAppointment_1.updateAppointmentController.handle(request, response);
});
appointmentRouter.delete('/delete', (request, response) => {
    return deleteAppointment_1.deleteAppointmentController.handle(request, response);
});
