/* eslint-disable no-unused-vars */

import * as FacilityRepository from '../repository/facilities.repository.js';
import AppError from '../../../utils/app.error.js';

export const createFacilityService = async (payload) => {
    const facilityExists = await FacilityRepository.readFacilityByName({
        name: payload.name,
    });

    if (facilityExists) {
        throw new AppError(400, 'Facility already exists');
    }

    const insetData = {
        ...payload,
        available_slots: payload.available_slots
            .split(',')
            .map((slot) => slot.trim())
            .filter(Boolean),
    };

    return await FacilityRepository.createFacility(insetData);
};

export const readsFacilityService = async () => {
    return await FacilityRepository.readFacilities();
};

export const readFacilityService = async (id) => {
    const facility = await FacilityRepository.readFacilityById(id);

    if (!facility) {
        throw new AppError(404, 'Facility not found');
    }

    return facility;
};

export const updateFacilityService = async (id, payload) => {
    const facility = await FacilityRepository.updateFacilityById(id, payload);

    if (!facility) {
        throw new AppError(404, 'Facility not found');
    }

    return facility;
};

export const deleteFacilityService = async (id) => {
    console.log('delete facility service call');
};
