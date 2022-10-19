"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentController = void 0;
class UpdateAppointmentController {
    constructor(updateAppointmentUseCase) {
        this.updateAppointmentUseCase = updateAppointmentUseCase;
    }
    ;
    async handle(request, response) {
        const { professionalId } = request.params;
        const data = { professionalId, ...request.body };
        try {
            await this.updateAppointmentUseCase.execute(data);
            return response.status(201).send();
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
exports.UpdateAppointmentController = UpdateAppointmentController;
;
