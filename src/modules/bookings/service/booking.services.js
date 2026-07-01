import * as BookingRepository from '../repository/booking.repository.js';
import AppError from '../../../utils/app.error.js';

export const createBookingService = async (payload) => {
    const alreadyBooking = await BookingRepository.readBookingByField(
        payload.facility_id,
        payload.booking_date,
        payload.time_slot
    );

    if (alreadyBooking) {
        throw new AppError(409, 'You have already booked this time slot.');
    }

    return await BookingRepository.createBooking(payload);
};

export const readsBookingService = async () => {
    console.log('reads booking service call');
};

export const readBookingService = async () => {
    console.log('read booking service');
};

export const updateBookingService = async () => {
    console.log('update booking service');
};
