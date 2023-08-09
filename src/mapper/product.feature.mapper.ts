import { ProductFeatureDto } from "../domain types/productFeature/product.feature.domain.types"; // Replace with actual domain types
import { ProductFeatures } from "../entity/product.feature.model"; // Replace with actual entity name

export class ProductFeatureMapper {
    static toDto = (productFeature: ProductFeatures): ProductFeatureDto => {
        if (!productFeature) {
            return null;
        }
        const dto: ProductFeatureDto = {
            productId: productFeature.productId,
            featureId: productFeature.featureId,
        };
        return dto;
    }
}