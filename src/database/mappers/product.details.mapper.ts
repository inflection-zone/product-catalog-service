import { ProductDetailsDto } from "../../domain.types/product.details/product.details.dto";
import { ProductDetails } from "../models/product.details"; 

export class ProductDetailsMapper {
    static toDto = (productDetails: ProductDetails): ProductDetailsDto => {
        if (!productDetails) {
            return null as any;
        }
        const dto: ProductDetailsDto = {
            //ProductId: productDetails.ProductId.id,
            productId: productDetails.productId,
            Information: productDetails.Information,
            AdditionalInformation: productDetails.AdditionalInformation,
            TechnicalDetails: productDetails.TechnicalDetails,
            PartNumber: productDetails.PartNumber,
            ModelNumber: productDetails.ModelNumber,
            CountryOfOrigin: productDetails.CountryOfOrigin,
            ItemWeight: productDetails.ItemWeight,
            ItemDimensions: productDetails.ItemDimensions,
            PackItemCount: productDetails.PackItemCount,
        };
        return dto;
    }
}