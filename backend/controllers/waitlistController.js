import { User } from "../models/waitlistUser.js";

/**
 * Creates new user with all the details
 * @param {User} user - all data to create a user
 * @returns {void}
 */
export function createUser(user) {
    User.create({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        createdAt: user.createdAt,
    })
        .then(() => {
            console.log("Added to waitlist");
        })
        .catch(
			/**@param {Error} error */(error) => {
                console.error(error);
            },
        );
}

export default console.error();