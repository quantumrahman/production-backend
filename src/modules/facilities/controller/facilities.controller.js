import * as FacilityService from '../service/facilities.services.js';
import AppResponse from '../../../utils/app.response.js';

export const createFacility = async (req, res, next) => {
    try {
        const facility = await FacilityService.createFacilityService(req.body);

        return res.status(201).json(new AppResponse(201, 'Facility create successfully', facility));
    } catch (error) {
        return next(error);
    }
};

export const readsFacility = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Facility reads successfully'));
    } catch (error) {
        return next(error);
    }
};

export const readFacility = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Facility read successfully'));
    } catch (error) {
        return next(error);
    }
};

export const updateFacility = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Facility update successfully'));
    } catch (error) {
        return next(error);
    }
};

export const deleteFacility = async (req, res, next) => {
    try {
        return res.status(200).json(new AppResponse(200, 'Facility delete successfully'));
    } catch (error) {
        return next(error);
    }
};
