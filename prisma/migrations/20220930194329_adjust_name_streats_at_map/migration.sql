/*
  Warnings:

  - You are about to drop the `streat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "streat";

-- CreateTable
CREATE TABLE "streats" (
    "id" SERIAL NOT NULL,
    "streatName" TEXT NOT NULL,

    CONSTRAINT "streats_pkey" PRIMARY KEY ("id")
);
