import prisma from '../database.js';
import { HistoricCreate } from '../services/historicServices.js';

export async function createHistoric(historic: HistoricCreate) {
    await prisma.historic.create({
        data: historic
    });
}