// @ts-ignore
import express from "express";

const router = express.Router();

import controller from "../controllers/recruiterController.js";

// @ts-ignore
router.get("/create", controller.createRecruiter);

// @ts-ignore
router.get("/update", controller.updateRecruiter);

// @ts-ignore
router.get("/id", controller.getRecruiter);

export default router;
