import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface ProductDiscountDto{
    productDiscountId: uuid;
    productId: uuid;
    merchantId: uuid;
    DiscountType: string;
    Discount: number;
    DiscountForVolume: number;
}