import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";


const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send(
            {
                data: "Esto solo lo ve las personas con session / jWT",
                user: req.user
            });
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }

}

export { getItems }