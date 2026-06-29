import { Router } from 'express';

const bookingRoute = Router();

bookingRoute.route('/').post((req, res) =>
    res.status(201).json({
        success: true,
        message: 'booking create successfully',
    })
);

bookingRoute.route('/').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'booking reads successfully',
    })
);

bookingRoute.route('/:id').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'booking read successfully',
    })
);

bookingRoute.route('/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'booking read successfully',
    })
);

export default bookingRoute;
