import * as BookingServices from '../service/booking.services.js';
import AppResponse from '../../../utils/app.response.js';

export const createBooking = async (req, res, next) => {
    try {
        const booking = await BookingServices.createBookingService(req.body);

        return res.status(201).json(new AppResponse(201, 'Booking create successfully', booking));
    } catch (error) {
        return next(error);
    }
};

export const readsBooking = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Booking reads successfully'));
    } catch (error) {
        return next(error);
    }
};

export const readBooking = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Booking read successfully'));
    } catch (error) {
        return next(error);
    }
};

export const updateBooking = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Booking update successfully'));
    } catch (error) {
        return next(error);
    }
};
