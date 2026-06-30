/* eslint-disable no-unused-vars */

import Facility from '../model/facilities.model.js';
import AppError from '../../../utils/app.error.js';

export const createFacilityService = async (payload) => {
    console.log('create facility service call');
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
