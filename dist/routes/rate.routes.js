"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRouter = void 0;
const express_1 = require("express");
const EnsureAuthenticate_1 = require("../middleware/EnsureAuthenticate");
const createRate_1 = require("../useCases/createRate");
const listRate_1 = require("../useCases/listRate");
const rateRouter = (0, express_1.Router)();
exports.rateRouter = rateRouter;
rateRouter.use(EnsureAuthenticate_1.EnsureAuthenticate);
rateRouter.post('/create', (request, response) => {
    return createRate_1.createRateController.handle(request, response);
});
rateRouter.get('/list/:professionalId', (request, response) => {
    return listRate_1.listRateController.handle(request, response);
});
