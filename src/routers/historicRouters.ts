import { Router } from 'express';
import { readHistoric, registerHistoric } from '../controllers/historicControllers.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';
import { schemaValidate } from '../middlewares/userMiddlewares.js';
import { historicSchema } from '../schemas/userSchema.js';

const historicRouter = Router();

historicRouter.post('/historic', tokenValidate, schemaValidate(historicSchema), registerHistoric);
historicRouter.get('/historic', tokenValidate, readHistoric);

export default historicRouter;