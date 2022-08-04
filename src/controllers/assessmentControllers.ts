import { Response, Request } from 'express';
import * as assessmentServices from '../services/assessmentsServices.js';

export async function registerAssessment(req: Request, res: Response) {
    const { assessment, phone } = req.body;
    await assessmentServices.createAssessment(assessment, phone);
    res.sendStatus(201);
}

export async function readAssesment(req: Request, res: Response) {
    const { phone } = req.params;
    const assessment = await assessmentServices.getAssessmentOrThrow(phone);
    res.send(assessment).status(200);
}