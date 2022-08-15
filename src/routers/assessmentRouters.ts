import { Router } from 'express';
import { registerAssessment, readAssesment, updateAssessment } from '../controllers/assessmentControllers.js';
import { tokenValidate } from '../middlewares/tokenValidate.js';
import { schemaValidate } from '../middlewares/userMiddlewares.js';
import { assessmentSchema } from '../schemas/userSchema.js';

const assessmentRouter = Router();

assessmentRouter.post('/assessment', tokenValidate, schemaValidate(assessmentSchema), registerAssessment);
assessmentRouter.get('/assessment', tokenValidate, readAssesment);
assessmentRouter.put('/assessment/:id', tokenValidate, schemaValidate(assessmentSchema), updateAssessment);

export default assessmentRouter;