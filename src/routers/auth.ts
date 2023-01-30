import { Request, Response, Router } from "express"
import { loginctrl, resgiterCtrl } from "../controllers/auth";

const router = Router();

/** 
 http://localhost:3002/auth/resgister [POST]
 *  **/
router.post("/register", resgiterCtrl);
router.post("/login", loginctrl);

export { router };