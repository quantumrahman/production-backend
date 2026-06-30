import { Router } from 'express';

import * as FacilityController from '../controller/facilities.controller.js';

const facilityRoute = Router();

facilityRoute.route('/').post(FacilityController.createFacility);

facilityRoute.route('/').get(FacilityController.readsFacility);

facilityRoute.route('/:id').get(FacilityController.readFacility);

facilityRoute.route('/:id').patch(FacilityController.updateFacility);

facilityRoute.route('/:id').delete(FacilityController.deleteFacility);

export default facilityRoute;
