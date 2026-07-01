import express from 'express';

import facilityRouter from './routes/facility.route.js';
import bookingRouter from './routes/booking.route.js';

import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', facilityRouter);
app.use('/api/v1', bookingRouter);

app.use(errorMiddleware);

export default app;
