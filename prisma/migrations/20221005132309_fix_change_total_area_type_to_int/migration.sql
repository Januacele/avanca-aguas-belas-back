/*
  Warnings:

  - You are about to alter the column `totalArea` on the `streatsInformation` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "streatsInformation" ALTER COLUMN "totalArea" SET DATA TYPE INTEGER;
