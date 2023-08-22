import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductDiscountDomainEntity {
    productDiscountId: uuid;
    productId: uuid;
    merchantId: uuid;
    DiscountType: string;
    Discount: number;
    DiscountForVolume: number;
}