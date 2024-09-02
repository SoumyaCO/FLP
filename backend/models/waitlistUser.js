import mongoose from "mongoose";

/** @typedef {Object} User
 * @property {Number} id
 * @property {string} email
 * @property {string} firstName
 * @property {string} lastName
 * @property {Date} createdAt
 */

/**@type {mongoose.Schema<User>} */
const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

export const User = mongoose.model("User", UserSchema);