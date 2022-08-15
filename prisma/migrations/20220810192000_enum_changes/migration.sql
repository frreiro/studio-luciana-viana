/*
  Warnings:

  - The values [Quente,Fria,Lamina,Laser] on the enum `Styles` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Styles_new" AS ENUM ('CERA_QUENTE', 'CERA_FRIA', 'LAMINA', 'LASER');
ALTER TABLE "assessment" ALTER COLUMN "lastStyle" TYPE "Styles_new" USING ("lastStyle"::text::"Styles_new");
ALTER TYPE "Styles" RENAME TO "Styles_old";
ALTER TYPE "Styles_new" RENAME TO "Styles";
DROP TYPE "Styles_old";
COMMIT;
