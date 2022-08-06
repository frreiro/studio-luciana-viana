import { _conflict, _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as userRepository from '../repositories/userRepository.js';
import { User } from '@prisma/client';
import { comparePassword, encryptPassword } from '../utils/bcrypt.js';
import { generateToken } from '../utils/token.js';

export type UserRegister = Omit<User, 'id'>
export async function createUser(user: UserRegister) {
    const dbUser = await getUser(user.email);
    if (dbUser) _conflict();
    const hashPassword = encryptPassword(user.password);
    await userRepository.createUser({ ...user, password: hashPassword });
}

export async function logUser({ password, email }: { password: string, email: string }) {
    const userDetails = await getUserOrThrow(email);
    comparePassword(password, userDetails.password);
    delete userDetails.password;
    const token = generateToken(userDetails.id);
    return token;
}


export async function getUserOrThrow(email: string) {
    const user = await userRepository.getUserByEmail(email);
    if (!user) throw _notfound();
    return { id: user.id, email: user.email, name: user.name, password: user.password };
}

export async function getUser(email: string) {
    return await userRepository.getUserByEmail(email);
}





