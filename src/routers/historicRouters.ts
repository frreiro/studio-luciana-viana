import { Router } from 'express';
import { registerHistoric } from '../controllers/historicControllers.js';
import { schemaValidate } from '../middlewares/userMiddlewares.js';
import { historicSchema } from '../schemas/userSchema.js';

const historicRouter = Router();

historicRouter.post('/user/historic', schemaValidate(historicSchema), registerHistoric);
export default historicRouter;