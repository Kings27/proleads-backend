import { Router } from 'express';
import UserController from '../controllers/teste.controller';

const router = Router();

router.get('/', UserController.test);

export default router;