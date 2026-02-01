import { Router } from 'express';
import OficinaController from '../controllers/OficinasControllers';

const router = new Router();

router.get('/', OficinaController.index);

export default router;
