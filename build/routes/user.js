import { Router } from 'express';
import * as UserCtrl from '../controllers/users.controller';
const router = Router();
router.get('/', UserCtrl.getUserAll);
export default router;