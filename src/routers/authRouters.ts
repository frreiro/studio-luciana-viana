import { Router } from 'express';
import { readUser, registerUser } from '../controllers/userControllers.js';
import { schemaValidate } from '../middlewares/userMiddlewares.js';
import { loginSchema, signupSchema } from '../schemas/authSchema.js';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(signupSchema), registerUser);
authRouter.post('/login', schemaValidate(loginSchema), readUser);

export default authRouter;