"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppointmentController = void 0;
class DeleteAppointmentController {
    constructor(deteteAppointmentUseCase) {
        this.deteteAppointmentUseCase = deteteAppointmentUseCase;
    }
    ;
    async handle(request, response) {
        const data = request.body;
        try {
            await this.deteteAppointmentUseCase.execute(data);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
        ;
    }
}
exports.DeleteAppointmentController = DeleteAppointmentController;
;
