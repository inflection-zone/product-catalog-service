import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductMerchantDto {
    // productId : uuid;
    // merchantId : uuid;
    MerchantPrice : number;
    Taxes : number;
    IncludeShipping : boolean;
    ShippingCharges : number;
}