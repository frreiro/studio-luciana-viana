import joi from 'joi';
import { HistoricRegister } from '../services/historicServices.js';
import { UserRegister } from '../services/userServices.js';



export const phoneSchema = joi.string().length(11).required();

export const userSchema = joi.object({
    user: joi.object<UserRegister>({
        name: joi.string().required(),
        email: joi.string().email().required(),
        //31122005
        birthday: joi.string().pattern(/^([0-2][0-9]|(3)[0-1])(((0)[0-9])|((1)[0-2]))\d{4}$/).required(),
        phone: joi.string().length(11).required(),
        adress: joi.string().required(),
        occupation: joi.string().required(),
        musicStyle: joi.string().required(),
    })
});

export const historicSchema = joi.object({
    historic: joi.object<HistoricRegister>({
        alergies: joi.string().allow(null),
        familyAlergies: joi.string().allow(null),
        skinDesease: joi.string().allow(null),
        medicines: joi.string().allow(null),
        pregnancy: joi.boolean().required()
    }),
    phone: joi.string().length(11).required()

});
