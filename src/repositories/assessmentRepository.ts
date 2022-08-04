import prisma from '../database.js';
import { AssessmentCreate } from '../services/assessmentsServices.js';

export async function createAssessment(assessment: AssessmentCreate) {
    await prisma.assessment.create({
        data: assessment
    });
}

export async function getAssessmentByPhone(phone: string) {
    return await prisma.assessment.findFirst({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                }
            },

        },
        where: {
            user: {
                phone
            }
        }
    });
}