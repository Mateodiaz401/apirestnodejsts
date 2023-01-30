import { Request, Response, Router } from "express"
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();


/**
 * http://localhost:3002/items[GET]
 */
router.get("/", logMiddleware, getItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };