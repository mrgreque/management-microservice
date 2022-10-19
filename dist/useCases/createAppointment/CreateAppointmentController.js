"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppointmentController = void 0;
class CreateAppointmentController {
    constructor(createAppointmentUseCase) {
        this.createAppointmentUseCase = createAppointmentUseCase;
    }
    ;
    async handle(request, response) {
        const data = request.body;
        try {
            await this.createAppointmentUseCase.execute(data);
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
exports.CreateAppointmentController = CreateAppointmentController;
;
