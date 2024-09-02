// @ts-ignore
import express from "express";

const router = express.Router();

import controller from "../controllers/waitlistController.js";

// @ts-ignore
router.get("/joinWaitlist", controller.createUser);

export default router;