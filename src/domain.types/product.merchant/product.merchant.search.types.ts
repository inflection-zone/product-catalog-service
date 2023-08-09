import { uuid } from "../miscellaneous/system.types";
import { ProductMerchantDto } from "./product.merchant.dto";


////////////////////////////////////////////////////////////


export interface ProductMerchantSearchFilters{
    // productId? : uuid;
    // merchantId? : uuid;
    merchantPrice? : number;
    taxes? : number;
    includeShipping? : boolean;
    shippingCharges? : number;
}


////////////////////////////////////////////////////////////


export interface ProductMerchantSearchResults{
    Items  : ProductMerchantDto[] ;
}