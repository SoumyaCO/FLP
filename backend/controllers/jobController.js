import { Job } from "../models/jobs.js";

/**
 * Creates new job with all the details
 * @param {Job} job - all data to create a job
 * @returns {void}
 */
export function createJob(job) {
    Job.create({
        id: job.id,
        title: job.title,
        description: job.description,
        poster: job.poster,
        expires: job.expires,
        budget: job.budget,
    })
        .then(() => {
            console.log("Job created");
        })
        .catch(
			/**@param {Error} error */(error) => {
                console.error(error);
            },
        );
}

/**
 * Update a Job with appropriate details
 * @param {Job} job - all data to update job
 * @param {Number} id - id of the job to be updated
 * @returns {void}
 */
export function updateJob(job, id) {
    Job.UpdateOne(
        { id },
        {
            $set: {
                title: job.title,
                description: job.description,
                poster: job.poster,
                assignedTo: job.assignedTo,
                comments: job.comments,
                expires: job.expires,
                budget: job.budget,
            },
        },
    )
        .then(() => {
            console.log("Job updated");
        })
        .catch(
			/**@param {Error} error */(error) => {
                console.error(error);
            },
        );
}



/**
 * Displays the details of a Job by id
 * @param {number} id - id of the job to be displayed
 * @returns {Promise<Job|null>} - Resolves with the job details or null if not found
 */
export function displayJob(id) {
    return Job.findOne({ id })
        .then(
            /** @param {Job} job */(job) => {
                if (job) {
                    console.log("Job details:", {
                        title: job.title,
                        description: job.description,
                        poster: job.poster,
                        assignedTo: job.assignedTo,
                        comments: job.comments,
                        expires: job.expires,
                        budget: job.budget,
                    });
                    return job;
                } else {
                    console.log("Job not found");
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
