import { Historic } from '@prisma/client';
import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as historicRepository from '../repositories/historicRepository.js';
import * as userServices from '../services/userServices.js';

export type HistoricCreate = Omit<Historic, 'id'>;
export type HistoricRegister = Omit<Historic, 'id' | 'userId'>;

export async function createHistoric(historic: HistoricRegister, id: number) {
    const dbHistoric = await getHistoric(id);
    if (dbHistoric) _conflict();
    await historicRepository.createHistoric({ ...historic, userId: id });
}

export async function getHistoricOrThrow(id: number) {
    const historic = await historicRepository.getHistoricById(id);
    if (!historic) _notfound();
    return historic;
}

export async function getHistoric(id: number) {
    const historic = await historicRepository.getHistoricById(id);
    return historic;
}