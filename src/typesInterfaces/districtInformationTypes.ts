import { DistrictsInformation } from "@prisma/client";


export type IDistrictsInformation = Omit<DistrictsInformation, 'id'>