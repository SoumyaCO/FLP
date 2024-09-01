// @ts-ignore
import express from "express";

const router = express.Router();

import controller from "../controllers/jobController.js";

// @ts-ignore
router.get("/create", controller.createJob);

// @ts-ignore
router.get("/update", controller.updateJob);

// @ts-ignore
router.get("/id", controller.getJob);

export default router;
