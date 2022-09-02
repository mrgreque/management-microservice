"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const EnsureAuthenticate_1 = require("../middleware/EnsureAuthenticate");
const createUser_1 = require("../useCases/createUser");
const deleteUser_1 = require("../useCases/deleteUser");
const listUser_1 = require("../useCases/listUser");
const updateUser_1 = require("../useCases/updateUser");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/create', (request, response) => {
    return createUser_1.createUserController.handle(request, response);
});
userRouter.use(EnsureAuthenticate_1.EnsureAuthenticate);
userRouter.delete('/delete/:id', (request, response) => {
    return deleteUser_1.deleteUserController.handle(request, response);
});
userRouter.put('/update/:id', (request, response) => {
    return updateUser_1.updateUserController.handle(request, response);
});
userRouter.get('/list/:id?', (request, response) => {
    return listUser_1.listUserController.handle(request, response);
});
userRouter.get('/search/:search?', (request, response) => {
    return listUser_1.listUserController.handle(request, response);
});
