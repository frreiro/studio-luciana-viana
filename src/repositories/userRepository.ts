import prisma from '../database.js';
import { User } from '@prisma/client';

export async function createUser(user: User) {
    await prisma.user.create({
        data: user
    });
}

export async function getUserByPhone(phone: string) {
    return await prisma.user.findFirst({
        where: { phone }
    });
}