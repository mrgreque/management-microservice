"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const UserModel_1 = require("../../models/UserModel");
class MongoUserRepository {
    async create(data) {
        await UserModel_1.UserModel.create(data);
    }
    ;
    async findByEmail(email) {
        const user = await UserModel_1.UserModel.findOne({ email });
        return user;
    }
    ;
    async findByCpf(cpf) {
        const user = await UserModel_1.UserModel.findOne({ cpf }, { 'password': 0 });
        return user;
    }
    ;
    async findAll() {
        const users = await UserModel_1.UserModel.find({}, { 'password': 0 });
        return users;
    }
    ;
    async findBySearch(query) {
        const users = await UserModel_1.UserModel.find(query, { 'password': 0 });
        return users;
    }
    ;
    async findById(id) {
        const user = await UserModel_1.UserModel.findById(id, { 'password': 0 });
        return user;
    }
    ;
    async delete(id) {
        await UserModel_1.UserModel.updateOne({ _id: id }, { active: false });
    }
    ;
    async update(data) {
        await UserModel_1.UserModel.updateOne({ _id: data.id }, data);
    }
    ;
}
exports.MongoUserRepository = MongoUserRepository;
;
