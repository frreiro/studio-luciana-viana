import { Router } from 'express';
import assessmentRouter from './assessmentRouters.js';
import authRouter from './authRouters.js';
import historicRouter from './historicRouters.js';

const routers = Router();

routers.use(authRouter);

//TODO: alterar historico e a avaliação
routers.use(historicRouter);
routers.use(assessmentRouter);



export default routers;