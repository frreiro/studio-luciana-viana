import { _notfound } from '../middlewares/errorHanlderMiddleware.js';
import * as userRepository from '../repositories/userRepository.js';

export async function getUser(phone: string) {
    const user = await userRepository.getUserByPhone(phone);
    if (!user) throw _notfound();
    return { id: user.id, email: user.email, name: user.name, phone: user.phone };
}
