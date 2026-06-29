import { Router } from 'express';
import bookingRoute from '../modules/bookings/router/index.js';

const bookingRouter = Router();

bookingRoute.use('/bookings', bookingRoute);

export default bookingRouter;
