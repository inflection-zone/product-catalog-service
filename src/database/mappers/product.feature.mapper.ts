import { ProductFeatureDto } from "../../domain.types/product.feature/product.feature.dto";
import { ProductFeature } from "../models/product.feature"; 

export class ProductFeatureMapper {
    static toDto = (productFeature: ProductFeature): ProductFeatureDto => {
        if (!productFeature) {
            return null as any;
        }
        const dto: ProductFeatureDto = {
            //ProductId: productFeature.ProductId.id,
            productId: productFeature.productId,
            featureId: productFeature.featureId.featureId,
        };
        return dto;
    }
}