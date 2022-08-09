/*
  Warnings:

  - You are about to drop the column `skinDesease` on the `historic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "historic" DROP COLUMN "skinDesease",
ADD COLUMN     "skinDeseases" TEXT;
