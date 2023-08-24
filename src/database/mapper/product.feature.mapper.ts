import { ProductFeatureDto } from "../../domain types/productfeature/product.feature.domain.type";
import { ProductFeatures } from "../models/product.feature.model"; 

export class ProductFeatureMapper {
    static toDto = (productFeature: ProductFeatures): ProductFeatureDto => {
        if (!productFeature) {
            return null;
        }
        const dto: ProductFeatureDto = {
            //ProductId: productFeature.ProductId.id,
            ProductId: productFeature.ProductId,
            FeatureId: productFeature.FeatureId.id,
        };
        return dto;
    }
}