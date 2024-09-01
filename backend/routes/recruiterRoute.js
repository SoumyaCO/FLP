// @ts-ignore
import express from "express";

const router = express.Router();

import controller from "../controllers/recruiterController.js";

// @ts-ignore
router.get("/", controller.createRecruiter);

// @ts-ignore
router.get("/id", controller.updateRecruiter);

export default router;
