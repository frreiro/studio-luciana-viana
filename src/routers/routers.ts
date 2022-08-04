import { Router } from 'express';
import historicRouter from './historicRouters.js';
import userRouter from './userRouters.js';

const routers = Router();

routers.use(userRouter);
routers.use(historicRouter);

export default routers;