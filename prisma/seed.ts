import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main(){

    await prisma.user.upsert({
        where: { email: "teste@gmail.com" },
        update: {},
        create: {
            name: "teste",
            cpf: "111.111.111-11",
            email: "teste@gmail.com",
            password: "teste1234567",
            secretary: "infraestrutura"
        }
    });

    await prisma.districts.createMany({
        data: [
           { districtName: "Ipanema" },
           { districtName: "Comunaty" },
           { districtName: "São Sebastião" }
        ],
        skipDuplicates: true
    });

    await prisma.streats.createMany({
        data: [
           { streatName: "Rua Cel Constantino", districtId: 1 },
           { streatName: "Rua São João", districtId: 2 },
           { streatName: "Rua Padre Nelson", districtId: 2 }   
        ],
        skipDuplicates: true
    });

    await prisma.streatsInformation.create({
        data: {
            totalArea: 400,
            hasBasicSanitation: true,
            hasAsphalt: false,
            hasPaving: true,
            hasStreetLighting: true,
            hasCleanWaterAccess: true,
            streatId: 1
        },
    });

    await prisma.districtsInformation.create({
        data: {
            hasHospital: false,
            hasPark: true,
            hasHealthCenter: true,
            hasSecurityCenter: false,
            hasSchool: false,
            hasKindergartens: false,
            districtId: 1
        },
    });
}


try {
    main();
} catch(e) {
    console.log(e);
    process.exit(1);
} finally {
    async () => await prisma.$disconnect();
}