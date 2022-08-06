import { Response, Request } from 'express';
import * as userServices from '../services/userServices.js';


//Trazer dados de email e nome
export async function readUser(req: Request, res: Response) {
    const body = req.body;
    const token = await userServices.logUser(body);
    res.send(token).status(200);
}


export async function registerUser(req: Request, res: Response) {
    const body = req.body;
    await userServices.createUser(body);
    res.sendStatus(201);
}