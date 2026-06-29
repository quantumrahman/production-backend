import { Router } from 'express';
import facilityRoute from '../modules/facilities/router/index.js';

const facilityRouter = Router();

facilityRouter.use('/facilities', facilityRoute);

export default facilityRouter;
