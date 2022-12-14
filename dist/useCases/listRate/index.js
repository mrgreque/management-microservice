"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRateController = void 0;
const MongoRateRepository_1 = require("../../repository/implementation/MongoRateRepository");
const MongoUserRepository_1 = require("../../repository/implementation/MongoUserRepository");
const ListRateController_1 = require("./ListRateController");
const ListRateUseCase_1 = require("./ListRateUseCase");
const rateRepository = new MongoRateRepository_1.MongoRateRepository();
const userRepository = new MongoUserRepository_1.MongoUserRepository();
const listRateUseCase = new ListRateUseCase_1.ListRateUseCase(rateRepository, userRepository);
const listRateController = new ListRateController_1.ListRateController(listRateUseCase);
exports.listRateController = listRateController;
