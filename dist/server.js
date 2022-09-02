"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = require("dotenv");
const client_1 = require("./provider/client");
(0, dotenv_1.config)();
app_1.app.listen(5555, async () => {
    await (0, client_1.startMongoClient)();
    console.log("Server is running!");
});
