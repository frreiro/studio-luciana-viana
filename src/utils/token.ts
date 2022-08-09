import jwt from 'jsonwebtoken';
import { _unauthorized } from '../middlewares/errorHanlderMiddleware.js';

const JWT_KEY = process.env.JWT_KEY;

export async function uncodeToken(token: string) {
    try {
        const userId = jwt.verify(token, JWT_KEY);
        return userId;
    } catch (e) {
        _unauthorized();
    }
}

export async function generateToken(id: number) {
    const token = jwt.sign({ id: id }, JWT_KEY);
    return token;
}