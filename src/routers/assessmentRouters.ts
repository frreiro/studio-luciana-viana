import { Router } from 'express';
import { readAssesment, registerAssessment } from '../controllers/assessmentControllers.js';
import { phoneSchemaValidate, schemaValidate } from '../middlewares/userMiddlewares.js';
import { assessmentSchema, phoneSchema } from '../schemas/userSchema.js';

const assessmentRouter = Router();

assessmentRouter.post('/user/assessments', schemaValidate(assessmentSchema), registerAssessment);
assessmentRouter.get('/user/assessments/:phone', phoneSchemaValidate(phoneSchema), readAssesment);


export default assessmentRouter;