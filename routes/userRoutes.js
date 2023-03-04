import express from 'express';
const router = express.Router();
import UserController from '../controller/userController.js';
import checkUserAuth from '../middleware/auth-middleware.js';
import SubscribeController from '../controller/subscribe.js';
import StaticController from '../controller/staticController.js';
// route level middleware 
router.use('/change-password', checkUserAuth )
router.use('/loggedUser',checkUserAuth)
// public routes --bina login ke use hoga
router.post('/register', UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/connect',UserController.userConnect)
router.post('/send-password-reset-email',UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token',UserController.userPasswordReset)
router.post('/subscribe',SubscribeController.subscribe)
router.get('/subscribe',SubscribeController.getSubscribe)
router.post('/static', StaticController.about)
router.get('/static', StaticController.getAbout)

// private routes
router.post('/change-password',UserController.changeUserPassword)
router.get('/loggedUser',UserController.loggedUser)
export default router