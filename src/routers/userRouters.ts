import { Router } from 'express';
import { readUser } from '../controllers/userControllers.js';
import { phoneSchemaValidate } from '../middlewares/userMiddlewares.js';
import { phoneSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.get('/user/:phone', phoneSchemaValidate(phoneSchema), readUser);

export default userRouter;