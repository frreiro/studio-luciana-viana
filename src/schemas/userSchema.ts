import joi from 'joi';
import { AssessmentRegister } from '../services/assessmentsServices.js';
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
        address: joi.string().required(),
        occupation: joi.string().required(),
        musicStyle: joi.string().required(),
    })
});

export const historicSchema = joi.object<HistoricRegister>({
    alergies: joi.string().allow(null).required(),
    familyAlergies: joi.string().allow(null).required(),
    skinDeseases: joi.string().allow(null).required(),
    medicines: joi.string().allow(null).required(),
    pregnancy: joi.boolean().strict().required()
});

export const assessmentSchema = joi.object<AssessmentRegister>({
    skinType: joi.string().valid('Seca', 'Oleosa', 'Normal').required(),
    spots: joi.string().allow(null).required(),
    skinChanges: joi.string().allow(null).required(),
    acidTreatment: joi.string().allow(null).required(),
    skinHidratation: joi.string().allow(null).required(),
    hasDiabetes: joi.boolean().required(),
    alreadyWax: joi.boolean().required(),
    lastStyle: joi.string().allow(null).required(),
});
