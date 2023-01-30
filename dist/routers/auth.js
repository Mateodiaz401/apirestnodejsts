"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = (0, express_1.Router)();
exports.router = router;
/**
 http://localhost:3002/auth/resgister [POST]
 *  **/
router.post("/register", auth_1.resgiterCtrl);
router.post("/login", auth_1.loginctrl);
