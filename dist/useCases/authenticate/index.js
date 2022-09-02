"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateController = exports.authenticateUseCase = void 0;
const MongoUserRepository_1 = require("../../repository/implementation/MongoUserRepository");
const AuthenticateController_1 = require("./AuthenticateController");
const AuthenticateUseCase_1 = require("./AuthenticateUseCase");
const userRepository = new MongoUserRepository_1.MongoUserRepository();
const authenticateUseCase = new AuthenticateUseCase_1.AuthenticateUseCase(userRepository);
exports.authenticateUseCase = authenticateUseCase;
const authenticateController = new AuthenticateController_1.AuthenticateController(authenticateUseCase);
exports.authenticateController = authenticateController;
