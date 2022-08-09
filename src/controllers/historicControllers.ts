import { Response, Request } from 'express';
import * as historicServices from '../services/historicServices.js';


export async function registerHistoric(req: Request, res: Response) {
    const { body: historic } = req;
    const { id } = res.locals.userId;
    await historicServices.createHistoric(historic, id);
    res.sendStatus(201);
}

export async function readHistoric(req: Request, res: Response) {
    const { id: userId } = res.locals.userId;
    const historic = await historicServices.getHistoricByUserIdOrThrow(userId);
    res.send(historic).status(200);
}

export async function updateHistoric(req: Request, res: Response) {
    const { body: historic } = req;
    const { id } = req.params;
    await historicServices.updateHistoric(historic, parseInt(id));
    res.sendStatus(201);
}