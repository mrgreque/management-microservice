"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRouter = void 0;
const express_1 = require("express");
const authenticate_1 = require("../useCases/authenticate");
const authenticateRouter = (0, express_1.Router)();
exports.authenticateRouter = authenticateRouter;
authenticateRouter.post('/', (request, response) => {
    return authenticate_1.authenticateController.handle(request, response);
});
