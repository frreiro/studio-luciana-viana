import { Assessment } from '@prisma/client';
import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as assessmentRepository from '../repositories/assessmentRepository.js';
import * as userServices from '../services/userServices.js';

export type AssessmentCreate = Omit<Assessment, 'id'>
export type AssessmentRegister = Omit<Assessment, 'id' | 'userId'>


export async function createAssessment(assessment: AssessmentRegister, phone: string) {
    const dbAssessment = await getAssessment(phone);
    if (dbAssessment) _conflict();
    const { id: userId } = await userServices.getUserOrThrow(phone);
    if (!userId) _notfound();
    await assessmentRepository.createAssessment({ ...assessment, userId });
}

export async function getAssessmentOrThrow(phone: string) {
    const assessment = await assessmentRepository.getAssessmentByPhone(phone);
    if (!assessment) _notfound();
    return assessment;
}

export async function getAssessment(phone: string) {
    const assessment = await assessmentRepository.getAssessmentByPhone(phone);
    return assessment;
}
