import { Response, Request } from 'express';
import * as assessmentServices from '../services/assessmentsServices.js';

export async function registerAssessment(req: Request, res: Response) {
    const { body: assessment } = req;
    const { id: userId } = res.locals.userId;
    await assessmentServices.createAssessment(assessment, userId);
    res.sendStatus(201);
}

export async function readAssesment(req: Request, res: Response) {
    const { id: userId } = res.locals.userId;
    const assessment = await assessmentServices.getAssessmentByUserIdOrThrow(userId);
    res.send(assessment).status(200);
}

export async function updateAssessment(req: Request, res: Response) {
    const { body: assessment } = req;
    const { id } = req.params;
    await assessmentServices.updateAssessment(assessment, parseInt(id));
    res.sendStatus(201);

}