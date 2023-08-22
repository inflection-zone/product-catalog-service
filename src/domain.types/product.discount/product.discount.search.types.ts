import { uuid } from "../miscellaneous/system.types";
import { ProductDiscountDto } from "./product.discount.dto";


////////////////////////////////////////////////////////////


export interface ProductDiscountSearchFilters {
    productDiscountId: uuid;
    productId: uuid;
    merchantId: uuid;
    DiscountType: string;
    Discount: number;
    DiscountForVolume: number;
}


////////////////////////////////////////////////////////////


export interface ProductDiscountSearchResults {
    Items: ProductDiscountDto[];
}