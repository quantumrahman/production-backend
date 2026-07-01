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
    console.log('reads facilities service call');
};

export const readFacilityService = async (id) => {
    console.log('read facility service call');
};

export const updateFacilityService = async (id, payload) => {
    console.log('update facility service call');
};

export const deleteFacilityService = async (id) => {
    console.log('delete facility service call');
};
