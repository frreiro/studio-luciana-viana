import { Assessment } from '@prisma/client';
import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as assessmentRepository from '../repositories/assessmentRepository.js';

export type AssessmentCreate = Omit<Assessment, 'id'>
export type AssessmentRegister = Omit<Assessment, 'id' | 'userId'>


export async function createAssessment(assessment: AssessmentRegister, userId: number) {
    const dbAssessment = await getAssessment(userId);
    if (dbAssessment) _conflict();
    await assessmentRepository.createAssessment({ ...assessment, userId });
}

export async function getAssessmentByUserIdOrThrow(userId: number) {
    const assessment = await assessmentRepository.getAssessmentByUserId(userId);
    if (!assessment) _notfound();
    return assessment;
}

export async function getAssessment(userId: number) {
    const assessment = await assessmentRepository.getAssessmentByUserId(userId);
    return assessment;
}

export async function updateAssessment(data: AssessmentCreate, id: number) {
    const assessment = await assessmentRepository.getAssessmentById(id);
    if (!assessment) _notfound();
    await assessmentRepository.update(data, id);
}