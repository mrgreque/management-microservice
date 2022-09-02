"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const User_1 = require("../entities/User");
const degreeSchema = new mongoose_1.Schema({
    description: {
        type: String,
        default: null
    },
    crp: {
        type: String,
        default: null
    }
}, { _id: false });
const addressSchema = new mongoose_1.Schema({
    street: {
        type: String,
        default: null
    },
    number: {
        type: Number,
        default: null
    },
    complement: {
        type: String,
        default: null
    },
    neighborhood: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    postalCode: {
        type: String,
        default: null
    }
}, { _id: false });
const UserSchema = new mongoose_1.Schema({
    cpf: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
        default: null
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'professional'],
    },
    degree: {
        type: degreeSchema,
        default: {}
    },
    description: {
        type: String,
        default: null
    },
    skills: {
        type: String,
        default: null
    },
    clinicName: {
        type: String,
        default: null
    },
    address: {
        type: addressSchema,
        default: {}
    },
    rate: {
        type: Number,
        default: null
    },
    tokenPush: {
        type: String,
        default: null
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });
UserSchema.loadClass(User_1.User);
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.UserModel = UserModel;
