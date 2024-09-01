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

export default console.error();
