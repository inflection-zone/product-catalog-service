import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface MerchantDomainEntity {

    merchantId: uuid;
    MerchantName: string;
    Email: string;
    Password: string;
    Address: string;
    AverageRatings: number;
    Url: string;
    Logo: string;
}