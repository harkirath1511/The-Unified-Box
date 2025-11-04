import {Router} from 'express'
import { googleSignup, manualRegister } from '../controllers/User.controllers.js';

const router = Router();

router.route('/signup').post(manualRegister);
router.route('/google-signup').get(googleSignup);

export default router;
