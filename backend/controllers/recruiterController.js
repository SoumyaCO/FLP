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


/**
 * Displays the details of a Recruiter by id
 * @param {number} id - id of the recruiter to be displayed
 * @returns {Promise<Recruiter|null>} - Resolves with the recruiter details or null if not found
 */
export function getRecruiter(id) {
    return Recruiter.findOne({ id })
        .then(
            /** @param {Recruiter} recruiter */(recruiter) => {
                if (recruiter) {
                    console.log("Recruiter details:", recruiter);
                    return recruiter;
                } else {
                    console.log("Recruiter not found");
                    return null;
                }
            }
        )
        .catch(
            /** @param {Error} error */(error) => {
                console.error(error);
                throw error; // Re-throw the error to propagate it
            },
        );
}

export default console.error();