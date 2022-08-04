import { Response, Request } from 'express';
import { _unprocessableEntity } from '../middlewares/errorHanlderMiddleware.js';
import * as userServices from '../services/userServices.js';


//Trazer dados de email e nome
export async function readUser(req: Request, res: Response) {
    const { phone } = req.params;
    const user = await userServices.getUser(phone);
    res.send(user).status(200);
}


export async function registerUser(req: Request, res: Response) {
    const { user } = req.body;
    if (!user) throw _unprocessableEntity();
    await userServices.createUser(user);
    res.sendStatus(200);
}