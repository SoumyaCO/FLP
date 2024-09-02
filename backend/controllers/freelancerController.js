import { Freelancer } from "../models/freelancers.js";

/**
 * Creates new Freelacner with appropriate deatails
 * @param {Freelancer} freelancer - all data to create a freelancer
 * @returns {void}
 */
export function createFreelancer(freelancer) {
	Freelancer.create({
		id: freelancer.id,
		firstName: freelancer.firstName,
		lastName: freelancer.lastName,
		photo: freelancer.photo,
	})
		.then(() => {
			console.log("freelancer created");
		})
		.catch(
			/**@param {Error} error */ (error) => {
				console.error(error);
			},
		);
}

/**
 * Update a Freelacner with appropriate deatails
 * @param {Freelancer} freelancer - all data to update freelancer
 * @param {Number} id - id of the freelancer to be updated
 * @returns {void}
 */
export function updateFreelancer(freelancer, id) {
	Freelancer.UpdateOne(
		{ id },
		{
			$set: {
				firstName: freelancer.firstName,
				lastName: freelancer.lastName,
				photo: freelancer.photo,
			},
		},
	)
		.then(() => {
			console.log("freelancer updated");
		})
		.catch(
			/**@param {Error} error */ (error) => {
				console.error(error);
			},
		);
}



/**
 * Displays the details of a Freelancer by id
 * @param {number} id - id of the freelancer to be displayed
 * @returns {Promise<Freelancer|null>} - Resolves with the freelancer details or null if not found
 */
export function getFreelancer(id) {
	return Freelancer.findOne({ id })
		.then(
            /** @param {Freelancer} freelancer */(freelancer) => {
				if (freelancer) {
					console.log("Freelancer details:", freelancer);
					return freelancer;
				} else {
					console.log("Freelancer not found");
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
