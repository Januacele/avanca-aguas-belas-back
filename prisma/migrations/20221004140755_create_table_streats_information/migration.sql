-- CreateTable
CREATE TABLE "streatsInformation" (
    "id" SERIAL NOT NULL,
    "totalArea" DOUBLE PRECISION NOT NULL,
    "hasBasicSanitation" BOOLEAN NOT NULL,
    "hasAsphalt" BOOLEAN NOT NULL,
    "hasPaving" BOOLEAN NOT NULL,
    "hasStreetLighting" BOOLEAN NOT NULL,
    "hasCleanWaterAccess" BOOLEAN NOT NULL,
    "streatId" INTEGER NOT NULL,

    CONSTRAINT "streatsInformation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "streatsInformation" ADD CONSTRAINT "streatsInformation_streatId_fkey" FOREIGN KEY ("streatId") REFERENCES "streats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
