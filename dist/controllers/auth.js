"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginctrl = exports.resgiterCtrl = void 0;
const auth_1 = require("../services/auth");
const resgiterCtrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUser = yield (0, auth_1.registerNewUser)(body);
    res.send(responseUser);
});
exports.resgiterCtrl = resgiterCtrl;
const loginctrl = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    const responseUser = yield (0, auth_1.loginUser)({ email, password });
    if (responseUser === "PASSWORD INCORRECT") {
        res.status(403);
        res.send(responseUser);
    }
    else {
        res.send(responseUser);
    }
});
exports.loginctrl = loginctrl;
