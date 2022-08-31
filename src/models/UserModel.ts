import mongoose, {Schema} from "mongoose";
import { User } from "../entities/User";

const degreeSchema = new Schema({
    description: {
        type: String,
        default: null
    },
    crp: {
        type: String,
        default: null
    }
}, {_id: false});

const addressSchema = new Schema({
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
}, {_id: false});


const UserSchema = new Schema({
    cpf: {
        type: String,
        required: true,
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
    active: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

UserSchema.loadClass(User);

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };

