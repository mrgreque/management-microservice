"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateController = void 0;
const MongoRateRepository_1 = require("../../repository/implementation/MongoRateRepository");
const MongoUserRepository_1 = require("../../repository/implementation/MongoUserRepository");
const CreateRateController_1 = require("./CreateRateController");
const CreateRateUseCase_1 = require("./CreateRateUseCase");
const rateRepository = new MongoRateRepository_1.MongoRateRepository();
const userRepository = new MongoUserRepository_1.MongoUserRepository();
const createRateUseCase = new CreateRateUseCase_1.CreateRateUseCase(rateRepository, userRepository);
const createRateController = new CreateRateController_1.CreateRateController(createRateUseCase);
exports.createRateController = createRateController;
