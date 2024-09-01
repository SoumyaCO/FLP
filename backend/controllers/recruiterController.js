import { Recruiter } from "../models/recruiters.js";

/**
 * Creates a new Recruiter with appropriate details
 * @param {Recruiter} recruiter - all data to create a recruiter
 * @returns {void}
 */
export function createRecruiter(recruiter) {
    Recruiter.create({
        id: recruiter.id,
        firstName: recruiter.firstName,
        lastName: recruiter.lastName,
        company: recruiter.company,
        photo: recruiter.photo,
    })
        .then(() => {
            console.log("recruiter created");
        })
        .catch(
            /**@param {Error} error */(error) => {
                console.error(error);
            },
        );
}

/**
 * Update a Recruiter with appropriate details
 * @param {Recruiter} recruiter - all data to update recruiter
 * @param {Number} id - id of the recruiter to be updated
 * @returns {void}
 */
export function updateRecruiter(recruiter, id) {
    Recruiter.updateOne(
        { id },
        {
            $set: {
                firstName: recruiter.firstName,
                lastName: recruiter.lastName,
                company: recruiter.company,
                photo: recruiter.photo,
            },
        },
    )
        .then(() => {
            console.log("recruiter updated");
        })
        .catch(
            /**@param {Error} error */(error) => {
                console.error(error);
            },
        );
}

export default console.error();