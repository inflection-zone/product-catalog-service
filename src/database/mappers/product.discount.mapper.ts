
import { ProductDiscountDto } from "../../domain types/productDiscount/product.discount.domain.types"; 
import { ProductDiscounts } from "../models/product.discounts.model"; 

export class ProductDiscountMapper {
    static toDto = (productDiscount: ProductDiscounts): ProductDiscountDto => {
        if (!productDiscount) {
            return null;
        }
        const dto: ProductDiscountDto = {
            productId: productDiscount.productId,
            merchantId: productDiscount.merchantId,
            discountType: productDiscount.discountType,
            discount: productDiscount.discount,
            discountForVolume: productDiscount.discountForVolume,
        };
        return dto;
    }
}