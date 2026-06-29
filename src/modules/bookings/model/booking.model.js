import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        facility_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'Facility id is required'],
            ref: 'facilities',
        },
        user_email: {
            type: String,
            required: [true, 'User email is required'],
            trim: true,
            lowercase: true,
        },
        booking_date: {
            type: String,
            required: [true, 'Booking date is required'],
            trim: true,
        },
        time_slot: {
            type: String,
            required: [true, 'Time slot is required'],
            trim: true,
        },
        hours: {
            type: Number,
            required: [true, 'Hours is required'],
            min: [1, 'Hours must be at least 1 hours'],
        },
        total_price: {
            type: Number,
            required: [true, 'Total price is required'],
            min: [0, 'Total price cannot be negative or 0'],
        },
        status: {
            type: String,
            enum: ['Pending', 'Cancelled'],
            default: 'Pending',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
