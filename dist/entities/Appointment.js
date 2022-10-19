"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const uuidv4_1 = require("uuidv4");
class Appointment {
    constructor(params, id) {
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
        ;
        Object.assign(this, params);
    }
    ;
}
exports.Appointment = Appointment;
;
