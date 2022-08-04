import { Router } from 'express';
import { readUser, registerUser } from '../controllers/userControllers.js';
import { phoneSchemaValidate, schemaValidate } from '../middlewares/userMiddlewares.js';
import { phoneSchema, userSchema } from '../schemas/userSchema.js';

const userRouter = Router();

userRouter.post('/user', schemaValidate(userSchema), registerUser);
userRouter.get('/user/:phone', phoneSchemaValidate(phoneSchema), readUser);
export default userRouter;