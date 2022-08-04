import { Router } from 'express';
import assessmentRouter from './assessmentRouters.js';
import historicRouter from './historicRouters.js';
import userRouter from './userRouters.js';

const routers = Router();

routers.use(userRouter);
routers.use(historicRouter);
routers.use(assessmentRouter);



export default routers;