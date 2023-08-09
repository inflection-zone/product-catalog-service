import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductMerchantDto {
    // productId : uuid;
    // merchantId : uuid;
    merchantPrice : number;
    taxes : number;
    includeShipping : boolean;
    shippingCharges : number;
}