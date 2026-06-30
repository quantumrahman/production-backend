import Facility from '../model/facilities.model.js';

export const createFacility = async (payload) => {
    return await Facility.create(payload);
};

export const readFacilities = async () => {
    return await Facility.find().lean();
};

export const readFacilityById = async (id) => {
    return await Facility.findById(id).lean();
};

export const updateFacilityById = async (id, payload) => {
    return await Facility.findByIdAndUpdate(
        id,
        {
            $set: payload,
        },
        {
            returnDocument: 'after',
            runValidators: true,
        }
    );
};

export const deleteFacilityById = async (id) => {
    return await Facility.findByIdAndDelete(id, {
        returnDocument: 'after',
    });
};
