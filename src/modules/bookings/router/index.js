import { Router } from 'express';

import * as BookingController from '../controller/booking.controller.js';

const bookingRoute = Router();

bookingRoute.route('/').post(BookingController.createBooking);

bookingRoute.route('/').get(BookingController.readsBooking);

bookingRoute.route('/:id').get(BookingController.readBooking);

bookingRoute.route('/:id').patch(BookingController.updateBooking);

export default bookingRoute;
