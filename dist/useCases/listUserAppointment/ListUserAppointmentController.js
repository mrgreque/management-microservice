"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserAppointmentController = void 0;
class ListUserAppointmentController {
    constructor(ListUserAppointmentUseCase) {
        this.ListUserAppointmentUseCase = ListUserAppointmentUseCase;
    }
    ;
    async handle(request, response) {
        const { userId } = request.params;
        try {
            const appointments = await this.ListUserAppointmentUseCase.execute({ userId });
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
exports.ListUserAppointmentController = ListUserAppointmentController;
;
