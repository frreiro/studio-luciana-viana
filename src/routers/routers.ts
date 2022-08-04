import { Router } from 'express';
import userRouter from './userRouters.js';

const routers = Router();

routers.use(userRouter);
export default routers;