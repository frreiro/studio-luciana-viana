import { Request, Response, NextFunction } from 'express';
import { uncodeToken } from '../utils/token.js';


export async function tokenValidate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log(authorization);
    const token = authorization?.replace('Bearer ', '').trim();
    console.log(token);
    if (!token) return res.sendStatus(401);
    const userId = await uncodeToken(token);
    res.locals.userId = userId;
    next();
}