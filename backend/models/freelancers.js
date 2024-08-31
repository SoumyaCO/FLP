import mongoose from "mongoose";
import { Job } from "./jobs";

/** @typedef {Object} Freelancer
 * @property {Number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} photo
 * @property {Date} createdAt
 * @property {Number} totalJobsDone
 * @property {Number} totalEarned
 * @property {Number} rating
 * @property {[Job]} CompletedJobs
 */

/**@type {mongoose.Schema<Freelancer>} */
const FreelancerSchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	photo: { type: String },
	createdAt: { type: Date, default: Date.now() },
	totalJobsDone: { type: Number, default: 0 },
	totalEarned: { type: Number, default: 0 },
	rating: { type: Number, default: 0 },
	CompletedJobs: { type: [Job], default: [] },
});

export const Freelancer = mongoose.model("Freelancer", FreelancerSchema);
