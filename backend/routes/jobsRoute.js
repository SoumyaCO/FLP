// @ts-ignore
import express from "express";

const router = express.Router();

import controller from "../controllers/jobController.js";

// @ts-ignore
router.get("/", controller.createJob);

// @ts-ignore
router.get("/id", controller.updateJob);

export default router;
