import { Historic } from '@prisma/client';
import { _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as historicRepository from '../repositories/historicRepository.js';
import * as userServices from '../services/userServices.js';

export type HistoricCreate = Omit<Historic, 'id'>;
export type HistoricRegister = Omit<Historic, 'id' | 'userId'>;


export async function createHistoric(historic: HistoricRegister, phone: string) {
    const { id: userId } = await userServices.getUser(phone);
    console.log(historic, userId);
    if (!userId) _notfound();
    await historicRepository.createHistoric({ ...historic, userId });
}