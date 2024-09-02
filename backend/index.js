// @ts-ignore
import express from 'express';
// @ts-ignore
import freelancerRoute from './routes/freelancerRoute.js';
// @ts-ignore
import recruiterRoute from './routes/recruiterRoute.js';
// @ts-ignore
import jobsRoute from './routes/jobsRoute.js';
// @ts-ignore
import waitlist from './routes/waitlist.js';

const app = express();

// Set up the routes
app.use('/freelancer', freelancerRoute);
app.use('/recruiter', recruiterRoute);
app.use('/job', jobsRoute);
app.use('/waitlist', waitlist.js)

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
