import { Response, Request } from 'express';
import * as userServices from '../services/userServices.js';
//Trazer dados de email e nome
export async function readUser(req: Request, res: Response) {
    const { phone } = req.params;
    const user = await userServices.getUser(phone);
    res.send(user).status(200);
}