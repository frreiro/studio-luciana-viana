import bcrypt from 'bcrypt';
import { _unauthorized } from '../middlewares/errorHanlderMiddleware.js';

export function encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
}

export function comparePassword(password: string, hashPassword: string) {
    const compare = bcrypt.compareSync(password, hashPassword);
    if (!compare) _unauthorized();
}