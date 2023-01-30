"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send('NO_TIENES_UN_JWT_VALIDO');
        }
        else {
            req.user = isUser;
            console.log(jwtByUser);
            next();
        }
    }
    catch (error) {
        console.log(error);
        res.status(400);
        res.send("SESSION_NO_VALID");
    }
};
exports.checkJwt = checkJwt;
