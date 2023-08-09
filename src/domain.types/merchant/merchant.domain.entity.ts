import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface MerchantDomainEntity{
    
    id: uuid;
    name: string;
    address: string;
    averageRatings: number;
    url: string;
    logo: string;
}