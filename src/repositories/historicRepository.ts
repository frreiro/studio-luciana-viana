import prisma from '../database.js';
import { HistoricCreate } from '../services/historicServices.js';

export async function createHistoric(historic: HistoricCreate) {
    await prisma.historic.create({
        data: historic
    });
}


export async function getHistoricByUserId(id: number) {
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
                id
            }
        }
    });
}

export async function getHistoricById(id: number) {
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
            id
        }
    });
}


export async function update(historic: HistoricCreate, id: number) {
    await prisma.historic.update({
        where: { id },
        data: historic
    });
}