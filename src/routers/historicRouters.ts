import { Router } from 'express';
import { readHistoric, registerHistoric } from '../controllers/historicControllers.js';
import { phoneSchemaValidate, schemaValidate } from '../middlewares/userMiddlewares.js';
import { historicSchema, phoneSchema } from '../schemas/userSchema.js';

const historicRouter = Router();

historicRouter.post('/user/historic', schemaValidate(historicSchema), registerHistoric);
historicRouter.get('/user/historic/:phone', phoneSchemaValidate(phoneSchema), readHistoric);

export default historicRouter;