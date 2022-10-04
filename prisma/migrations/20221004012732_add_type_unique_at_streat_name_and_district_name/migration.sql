/*
  Warnings:

  - A unique constraint covering the columns `[districtName]` on the table `districts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[streatName]` on the table `streats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "districts_districtName_key" ON "districts"("districtName");

-- CreateIndex
CREATE UNIQUE INDEX "streats_streatName_key" ON "streats"("streatName");

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
