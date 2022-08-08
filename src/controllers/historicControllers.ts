import { Response, Request } from 'express';
import * as historicServices from '../services/historicServices.js';


export async function registerHistoric(req: Request, res: Response) {
    const { historic } = req.body;
    const { id } = res.locals.userId;
    await historicServices.createHistoric(historic, id);
    res.sendStatus(201);
}

export async function readHistoric(req: Request, res: Response) {
    const { id } = res.locals.userId;
    const historic = await historicServices.getHistoricOrThrow(id);
    res.send(historic).status(200);
}