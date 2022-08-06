import prisma from '../database.js';
import { HistoricCreate } from '../services/historicServices.js';

export async function createHistoric(historic: HistoricCreate) {
    await prisma.historic.create({
        data: historic
    });
}


export async function getHistoricByPhone(phone: string) {
    return await prisma.historic.findFirst({
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