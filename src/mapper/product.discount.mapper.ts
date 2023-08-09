
import { ProductDiscountDto } from "../domain types/productDiscount/product.discount.domain.types"; // Replace with actual domain types
import { ProductDiscounts } from "../entity/product.discounts.model"; // Replace with actual entity name

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