import { Router } from 'express';

const facilityRoute = Router();

facilityRoute.route('/').post((req, res) =>
    res.status(201).json({
        success: true,
        message: 'facility create successfully',
    })
);

facilityRoute.route('/').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'facility reads successfully',
    })
);

facilityRoute.route('/:id').get((req, res) =>
    res.status(200).json({
        success: true,
        message: 'facility read successfully',
    })
);

facilityRoute.route('/:id').patch((req, res) =>
    res.status(200).json({
        success: true,
        message: 'facility update successfully',
    })
);

facilityRoute.route('/:id').delete((req, res) =>
    res.status(200).json({
        success: true,
        message: 'facility delete successfully',
    })
);

export default facilityRoute;
