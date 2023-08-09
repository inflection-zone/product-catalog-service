import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface MerchantDto {
    id: uuid;
    name: string;
    address: string;
    averageRatings: number;
    url: string;
    logo: string;
}