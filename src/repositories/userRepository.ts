import prisma from '../database.js';
import { UserRegister } from '../services/userServices.js';

export async function createUser(user: UserRegister) {
    await prisma.user.create({
        data: user
    });
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findFirst({
        where: { email }
    });
}