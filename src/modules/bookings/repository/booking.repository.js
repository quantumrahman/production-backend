import Booking from '../model/booking.model.js';

export const createBooking = async (payload) => {
    return await Booking.create(payload);
};

export const readBookings = async () => {
    return await Booking.find().lean();
};

export const readBookingByField = async (facilityId, bookingDate, timeSlot) => {
    return await Booking.findOne({
        facility_id: facilityId,
        booking_date: bookingDate,
        time_slot: timeSlot,
    });
};

export const readBookingById = async (id) => {
    return await Booking.findById(id).lean();
};

export const updateBookingById = async (id, payload) => {
    return await Booking.findByIdAndUpdate(
        id,
        {
            $set: payload,
        },
        {
            returnDocument: 'after',
        }
    );
};
