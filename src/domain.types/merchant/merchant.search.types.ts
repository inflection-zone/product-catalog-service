import { uuid } from "../miscellaneous/system.types";
import { MerchantDto } from "./merchant.dto";


////////////////////////////////////////////////////////////


export interface MerchantSearchFilters{
    id?: uuid;
    name?: string;
    address?: string;
    averageRatings?: number;
    url?: string;
    logo?: string;
}


////////////////////////////////////////////////////////////


export interface MerchantSearchResults{
    Items  : MerchantDto[] ;
}