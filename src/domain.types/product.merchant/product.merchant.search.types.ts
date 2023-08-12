import { uuid } from "../miscellaneous/system.types";
import { ProductMerchantDto } from "./product.merchant.dto";


////////////////////////////////////////////////////////////


export interface ProductMerchantSearchFilters{
    // productId? : uuid;
    // merchantId? : uuid;
    MerchantPrice? : number;
    Taxes? : number;
    IncludeShipping? : boolean;
    ShippingCharges? : number;
}


////////////////////////////////////////////////////////////


export interface ProductMerchantSearchResults{
    Items  : ProductMerchantDto[] ;
}