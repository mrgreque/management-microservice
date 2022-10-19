"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppointmentController = void 0;
class ListAppointmentController {
    constructor(listAppointmentUseCase) {
        this.listAppointmentUseCase = listAppointmentUseCase;
    }
    ;
    async handle(request, response) {
        const { professionalId } = request.params;
        try {
            const appointments = await this.listAppointmentUseCase.execute({ professionalId });
            return response.status(200).json(appointments);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
        ;
    }
    ;
}
exports.ListAppointmentController = ListAppointmentController;
;
