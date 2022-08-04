import { Historic } from '@prisma/client';
import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as historicRepository from '../repositories/historicRepository.js';
import * as userServices from '../services/userServices.js';

export type HistoricCreate = Omit<Historic, 'id'>;
export type HistoricRegister = Omit<Historic, 'id' | 'userId'>;

export async function createHistoric(historic: HistoricRegister, phone: string) {
    const dbHistoric = await getHistoric(phone);
    if (dbHistoric) _conflict();
    const { id: userId } = await userServices.getUser(phone);
    if (!userId) _notfound();
    await historicRepository.createHistoric({ ...historic, userId });
}

export async function getHistoricOrThrow(phone: string) {
    const historic = await historicRepository.getHistoricByPhone(phone);
    if (!historic) _notfound();
    return historic;
}

export async function getHistoric(phone: string) {
    const historic = await historicRepository.getHistoricByPhone(phone);
    return historic;
}