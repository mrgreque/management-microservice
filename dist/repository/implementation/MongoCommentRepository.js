"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCommentRepository = void 0;
const CommentModel_1 = require("../../models/CommentModel");
class MongoCommentRepository {
    async create(data) {
        await CommentModel_1.CommentModel.create(data);
    }
    ;
    async findById(id) {
        const comment = await CommentModel_1.CommentModel.findOne({ id });
        return comment;
    }
    ;
    async findAll() {
        const comments = await CommentModel_1.CommentModel.find({ visible: true });
        return comments;
    }
    ;
    async search(data) {
        const comments = await CommentModel_1.CommentModel.find({ visible: true, ...data });
        return comments;
    }
    ;
    async delete(id) {
        await CommentModel_1.CommentModel.updateOne({ '_id': id }, { visible: false });
    }
    ;
}
exports.MongoCommentRepository = MongoCommentRepository;
;
