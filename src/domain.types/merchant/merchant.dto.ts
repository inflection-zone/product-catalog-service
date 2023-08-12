import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface MerchantDto {
    merchantId: uuid;
    MerchantName: string;
    Address: string;
    AverageRatings: number;
    Url: string;
    Logo: string;
}