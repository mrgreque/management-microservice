"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rate = void 0;
const uuidv4_1 = require("uuidv4");
class Rate {
    constructor(params, id) {
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
        ;
        Object.assign(this, params);
    }
    ;
}
exports.Rate = Rate;
;
