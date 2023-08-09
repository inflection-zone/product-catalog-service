import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductMerchantDomainEntity{
    
    // productId : uuid;
    // merchantId : uuid;
    merchantPrice : number;
    taxes : number;
    includeShipping : boolean;
    shippingCharges : number;
}