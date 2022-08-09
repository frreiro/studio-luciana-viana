import { Request, Response, NextFunction } from 'express';
import { uncodeToken } from '../utils/token.js';


export async function tokenValidate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '').trim();
    if (!token) return res.sendStatus(401);
    const userId = await uncodeToken(token);
    res.locals.userId = userId;
    next();
}