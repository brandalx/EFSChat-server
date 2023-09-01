import messageController from "../controllers/messageController.js";

import { Router } from "express";

const router = Router();

router.get("/", messageController.getMessage);
export default router;
