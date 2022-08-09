import { Router } from 'express';
import { readHistoric, registerHistoric, updateHistoric } from '../controllers/historicControllers.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';
import { schemaValidate } from '../middlewares/userMiddlewares.js';
import { historicSchema } from '../schemas/userSchema.js';

const historicRouter = Router();

historicRouter.post('/historic', tokenValidate, schemaValidate(historicSchema), registerHistoric);
historicRouter.post('/historic/:id', tokenValidate, schemaValidate(historicSchema), updateHistoric);
historicRouter.get('/historic', tokenValidate, readHistoric);

export default historicRouter;