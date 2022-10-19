"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRateController = void 0;
class ListRateController {
    constructor(listRateUseCase) {
        this.listRateUseCase = listRateUseCase;
    }
    ;
    async handle(request, response) {
        const { professionalId } = request.params;
        try {
            const rates = await this.listRateUseCase.execute({ professionalId });
            return response.status(200).json(rates);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
        ;
    }
    ;
}
exports.ListRateController = ListRateController;
;
