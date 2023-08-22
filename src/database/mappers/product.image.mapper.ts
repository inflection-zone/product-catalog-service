import { ProductImage } from "../models/product.image"; 
import {ProductImageDto} from '../../domain.types/product.image/product.image.dto'

export class ProductImageMapper {
    static toDto = (productImage): ProductImageDto => {
        if (!productImage) {
            return null as any;
        }
        const dto: ProductImageDto = {
            productImageId: productImage.productImageId,
            ImageUrl : productImage.ImageUrl
        };
        return dto;
    }
}
