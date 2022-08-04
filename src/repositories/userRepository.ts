import prisma from '../database.js';


export async function getUserByPhone(phone: string) {
    return await prisma.user.findFirst({
        where: { phone }
    });
}