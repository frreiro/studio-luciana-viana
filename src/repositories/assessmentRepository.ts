import prisma from '../database.js';
import { AssessmentCreate } from '../services/assessmentsServices.js';

export async function createAssessment(assessment: AssessmentCreate) {
    await prisma.assessment.create({
        data: assessment
    });
}

export async function getAssessmentByUserId(userId: number) {
    return await prisma.assessment.findFirst({
        where: {
            user: {
                id: userId,
            }
        }
    });
}

export async function update(assessment: AssessmentCreate, id: number) {
    await prisma.assessment.update({
        where: { id },
        data: assessment
    });
}


export async function getAssessmentById(id: number) {
    return await prisma.assessment.findFirst({
        where: {
            id
        }
    });
}