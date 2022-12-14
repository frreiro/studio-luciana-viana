import joi from 'joi';
import { UserRegister } from '../services/userServices.js';

export const signupSchema = joi.object<UserRegister>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    //31122005
    birthday: joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(((0)[0-9])|((1)[0-2]))\d{4}$/).required(),
    phone: joi.string().length(11).required(),
    address: joi.string().required(),
    occupation: joi.string().required(),
    musicStyle: joi.string().required(),
    password: joi.string().required()
});


export const loginSchema = joi.object<UserRegister>({
    email: joi.string().email().required(),
    password: joi.string().required()
});
