import { ProductDetailsDto } from "../../domain types/productdetails/product.details.dto";
import { ProductDetails } from "../models/product.details.model"; 

export class ProductDetailsMapper {
    static toDto = (productDetails: ProductDetails): ProductDetailsDto => {
        if (!productDetails) {
            return null;
        }
        const dto: ProductDetailsDto = {
            // ProductId: productDetails.ProductId.id,
            ProductId: productDetails.ProductId,
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
           
           