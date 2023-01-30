"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const item_1 = require("../controllers/item");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3002/items[GET]
 */
router.get("/", log_1.logMiddleware, item_1.getItems);
router.get("/:id", log_1.logMiddleware, item_1.getItem);
router.post("/", item_1.postItem);
router.put("/:id", item_1.updateItem);
router.delete("/:id", item_1.deleteItem);
