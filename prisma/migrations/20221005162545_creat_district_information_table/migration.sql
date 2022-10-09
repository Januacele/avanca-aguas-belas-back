-- CreateTable
CREATE TABLE "districtsInformation" (
    "id" SERIAL NOT NULL,
    "hasHospital" BOOLEAN NOT NULL,
    "hasPark" BOOLEAN NOT NULL,
    "hasHealthCenter" BOOLEAN NOT NULL,
    "hasSecurityCenter" BOOLEAN NOT NULL,
    "hasSchool" BOOLEAN NOT NULL,
    "hasKindergartens" BOOLEAN NOT NULL,
    "districtId" INTEGER NOT NULL,

    CONSTRAINT "districtsInformation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "districtsInformation" ADD CONSTRAINT "districtsInformation_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
