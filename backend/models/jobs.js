import mongoose from "mongoose";
import { Freelancer } from "./freelancers.js";
import { Recruiter } from "./recruiters.js";

/**
 * @typedef {Object} Job
 * @property {Number} id
 * @property {string} title
 * @property {string} description
 * @property {Date} createdAt
 * @property {[{person: Freelancer, comment:string}]} comments
 * @property {mongoose.Types.ObjectId} poster
 * @property {Date} expires
 * @property {Number} budget
 * @property {Freelancer} assignedTo
 */

/** @type {mongoose.Schema<Job>} */
const JobSchema = new mongoose.Schema({
	id: { type: Number, required: true, unique: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Date, default: Date.now() },
	comments: {
		type: [
			{
				person: { type: Freelancer },
				comment: { type: String },
			},
		],
	},
	poster: { type: Recruiter },
	expires: { type: Date },
	budget: { type: Number, required: true },
	assignedTo: { type: Freelancer },
});

export const Job = mongoose.model("Job", JobSchema);
