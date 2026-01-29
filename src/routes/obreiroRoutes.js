import { Router } from 'express';
import obreiroController from '../controllers/obreiroController';

const router = new Router();

router.get('/', obreiroController.index);
router.post('/', obreiroController.store);
router.put('/:id', obreiroController.update);
router.get('/:id', obreiroController.show);
router.delete('/:id', obreiroController.delete);

export default router;
