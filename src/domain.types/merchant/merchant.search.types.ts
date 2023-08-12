import { uuid } from "../miscellaneous/system.types";
import { MerchantDto } from "./merchant.dto";


////////////////////////////////////////////////////////////


export interface MerchantSearchFilters{
    merchantId?: uuid;
    Name?: string;
    Address?: string;
    AverageRatings?: number;
    Url?: string;
    Logo?: string;
}


////////////////////////////////////////////////////////////


export interface MerchantSearchResults{
    Items  : MerchantDto[] ;
}