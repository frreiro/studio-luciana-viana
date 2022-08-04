import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routers from './routers/routers.js';
import { errorHandler } from './middlewares/errorHanlderMiddleware.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use(routers);
app.use(errorHandler);
export default app;