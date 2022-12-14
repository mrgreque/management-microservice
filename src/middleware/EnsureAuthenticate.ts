import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function EnsureAuthenticate(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing."
        })
    };

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.SECRET_KEY);
        
        return next();
    }
    catch (err) {
        return response.status(401).json({
            message: "Invalid token."
        });
    };

};