import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function schemaValidate(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(422).send(error.details.map(detail => detail.message));
        }
        next();
    };
}