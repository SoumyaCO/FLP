// @ts-ignore
import express from "express";

const router = express.Router();

// import { FreelancerList, FreelancerID } from "../controllers/freelancerController.js";
import controller from "../controllers/freelancerController.js";

// @ts-ignore
router.get("/", controller.createFreelancer);

// @ts-ignore
router.get("/id", controller.updateFreelancer);

export default router;
