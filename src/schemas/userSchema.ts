import joi from 'joi';

export const phoneSchema = joi.string().length(11).required();