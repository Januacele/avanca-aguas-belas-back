/*
  Warnings:

  - Added the required column `districtId` to the `streats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "streats" ADD COLUMN     "districtId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "streats" ADD CONSTRAINT "streats_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
