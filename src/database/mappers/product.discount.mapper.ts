import { ProductDiscount } from "../models/product.discount"; 
import {ProductDiscountDto} from '../../domain.types/product.discount/product.discount.dto'

export class ProductDiscountMapper {
    static toDto = (productDiscount: ProductDiscount): ProductDiscountDto => {
        if (!productDiscount) {
            return null as any;
        }
        const dto: ProductDiscountDto = {
            productDiscountId: productDiscount.productDiscountId,
            productId: productDiscount.productId,
            merchantId: productDiscount.merchantId,
            DiscountType: productDiscount.DiscountType,
            Discount: productDiscount.Discount,
            DiscountForVolume: productDiscount.DiscountForVolumn,
        };
        return dto;
    }
}
