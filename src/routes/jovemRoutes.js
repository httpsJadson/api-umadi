import { Router } from 'express';
import JovemController from '../controllers/jovemControllers';

const router = new Router();

router.get('/', JovemController.index);
router.post('/', JovemController.store);
router.put('/:id', JovemController.update);
router.get('/:id', JovemController.show);
router.delete('/:id', JovemController.delete);

export default router;
