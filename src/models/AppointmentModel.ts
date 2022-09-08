import mongoose, {Schema} from "mongoose";
import { User } from "../entities/User";

const AppointmentSchema = new Schema({
    professionalId: {
        type: String,
        required: true,
    },
    appointments: {
        type: Object,
        default: null,
    }
}, {timestamps: true});

AppointmentSchema.loadClass(User);

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);

export { AppointmentModel };

