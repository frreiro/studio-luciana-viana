import { Router } from 'express';
import { getUser } from '../controllers/userControllers.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';

const userRouter = Router();

userRouter.get('/user', tokenValidate, getUser);

export default userRouter;