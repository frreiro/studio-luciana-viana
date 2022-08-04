/*
  Warnings:

  - The values [Combinada] on the enum `Skins` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `oldStyle` on the `Assessment` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Styles" AS ENUM ('Quente', 'Fria', 'Lamina', 'Laser');

-- AlterEnum
BEGIN;
CREATE TYPE "Skins_new" AS ENUM ('Oleosa', 'Seca', 'Normal');
ALTER TABLE "Assessment" ALTER COLUMN "skinType" TYPE "Skins_new" USING ("skinType"::text::"Skins_new");
ALTER TYPE "Skins" RENAME TO "Skins_old";
ALTER TYPE "Skins_new" RENAME TO "Skins";
DROP TYPE "Skins_old";
COMMIT;

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "oldStyle",
ADD COLUMN     "lastStyle" "Styles";
