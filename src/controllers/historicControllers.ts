import { Response, Request } from 'express';
import * as historicServices from '../services/historicServices.js';


export async function registerHistoric(req: Request, res: Response) {
    const { historic, phone } = req.body;
    const user = await historicServices.createHistoric(historic, phone);
    res.send(user).status(200);
}