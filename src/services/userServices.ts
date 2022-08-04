import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as userRepository from '../repositories/userRepository.js';
import { User } from '@prisma/client';

export type UserRegister = Omit<User, 'id'>
export async function createUser(user: User) {
    const dbUser = await getUser(user.phone);
    if (dbUser) _conflict();
    await userRepository.createUser(user);
}

export async function getUserOrThrow(phone: string) {
    const user = await userRepository.getUserByPhone(phone);
    if (!user) throw _notfound();
    return { id: user.id, email: user.email, name: user.name, phone: user.phone };
}

export async function getUser(phone: string) {
    return await userRepository.getUserByPhone(phone);
}
