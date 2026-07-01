import { Router } from 'express';
import bookingRoute from '../modules/bookings/router/index.js';

const bookingRouter = Router();

bookingRouter.use('/bookings', bookingRoute);

export default bookingRouter;
