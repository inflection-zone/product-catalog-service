import { ProductImageDto } from "../domain types/productImage/product.image.domain.types";
import { ProductImages } from "../entity/product.images.model"; 

export class ProductImageMapper {
    static toDto = (productImage: ProductImages): ProductImageDto => {
        if (productImage === null) {
            return null;
        }
        const dto: ProductImageDto = {
            id: productImage.id,
            productId: productImage.productId,
            imageUrl: productImage.imageUrl,
        };
        return dto;
    }
}