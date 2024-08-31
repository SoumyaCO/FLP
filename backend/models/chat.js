import mongoose from "mongoose";
import { Freelancer } from "./freelancers";
import { Recruiter } from "./recruiters";

/**
 * @typedef {Object} Chat
 * @property {Number} chatOwnerId
 * @property {Freelancer | Recruiter} sender
 * @property {Freelancer | Recruiter} receiver
 * @property {string} message
 * @property {Date} time
 */

/** @type {mongoose.Schema<Chat>} */
const ChatSchema = new mongoose.Schema({
	chatOwnerId: { type: Number },
	sender: { type: [Freelancer, Recruiter] },
	receiver: { type: [Freelancer, Recruiter] },
	message: { type: String },
	time: { type: Date, default: Date.now() },
});

export const Chat = mongoose.model("Chat", ChatSchema);
