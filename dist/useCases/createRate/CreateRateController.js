"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRateController = void 0;
class CreateRateController {
    constructor(createRateController) {
        this.createRateController = createRateController;
    }
    ;
    async handle(request, response) {
        const data = request.body;
        try {
            await this.createRateController.execute(data);
            return response.status(201).send();
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
exports.CreateRateController = CreateRateController;
;
