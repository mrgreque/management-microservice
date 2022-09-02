"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsureAuthenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function EnsureAuthenticate(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing."
        });
    }
    ;
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: "Invalid token."
        });
    }
    ;
}
exports.EnsureAuthenticate = EnsureAuthenticate;
;
