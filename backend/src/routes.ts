import { Router } from 'express';
import OrphanageController from './controllers/OrphanagesControllers';

const routes = Router();

routes.post('/orphanages', OrphanageController.create)
routes.get('/orphanages/:id', OrphanageController.show)
routes.get('/orphanages', OrphanageController.index)

export default routes;