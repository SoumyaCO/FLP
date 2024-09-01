import mongoose from "mongoose";
import { Job } from "./jobs.js";

/** @typedef {Object} Recruiter
 * @property {Number} id
 * @property {string} email
 * @property {string} password
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} company
 * @property {string} photo
 * @property {Date} createdAt
 * @property {Number} totalJobsPosted
 * @property {Number} totalSpent
 * @property {Number} rating
 * @property {[Job]} postedJob
 */

/** @type {mongoose.Schema<Recruiter>} */
const RecruiterSchema = new mongoose.Schema({
	id: { type: Number, unique: true },
	firstName: { type: String },
	lastName: { type: String },
	company: { type: String },
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	photo: { type: String },
	createdAt: { type: Date, default: Date.now() },
	totalJobsPosted: { type: Number },
	totalSpent: { type: Number },
	rating: { type: Number },
	postedJob: { type: [Job] },
});

export const Recruiter = mongoose.model("Recruiter", RecruiterSchema);
