"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMongoClient = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
async function startMongoClient() {
    await mongoose_1.default.connect(process.env.DATABASE_URL);
}
exports.startMongoClient = startMongoClient;
;
