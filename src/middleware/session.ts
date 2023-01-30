import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";


const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if (!isUser) {
            res.status(401);
            res.send('NO_TIENES_UN_JWT_VALIDO');
        } else {
            req.user = isUser;
            console.log(jwtByUser);
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(400);
        res.send("SESSION_NO_VALID");
    }
}

export { checkJwt };