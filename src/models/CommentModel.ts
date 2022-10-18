import mongoose, {Schema} from "mongoose";
import { Comment } from "../entities/Comment";

const CommentSchema = new Schema({
    professionalId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    visible: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

CommentSchema.loadClass(Comment);

const CommentModel = mongoose.model("Comment", CommentSchema);

export { CommentModel };