import express from 'express';

import facilityRouter from './routes/facility.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', facilityRouter);

export default app;
