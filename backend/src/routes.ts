import { Router } from 'express';
import multer from 'multer';
import OrphanageController from './controllers/OrphanagesControllers';
import uploadConfig from './config/Upload';

const routes = Router();
const upload = multer(uploadConfig)

routes.post('/orphanages', upload.array('images'),OrphanageController.create)
routes.get('/orphanages/:id', OrphanageController.show)
routes.get('/orphanages', OrphanageController.index)

export default routes;