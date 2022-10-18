import mongoose, {Schema} from "mongoose";
import { Rate } from "../entities/Rate";

const RateSchema = new Schema({
    professionalId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

RateSchema.loadClass(Rate);

const RateModel = mongoose.model("Rate", RateSchema);

export { RateModel };