import { ProductFeatureDto } from "../../domain types/productFeature/product.feature.domain.types";
import { ProductFeatures } from "../models/product.feature.model"; 

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