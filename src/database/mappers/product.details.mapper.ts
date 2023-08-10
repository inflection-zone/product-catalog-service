import { ProductDetailsDto } from "../../domain types/productDetails/product.details.domain.types"; 
import { ProductDetails } from "../models/product.details.model"; 

export class ProductDetailsMapper {
    static toDto = (productDetails: ProductDetails): ProductDetailsDto => {
        if (!productDetails) {
            return null;
        }
        const dto: ProductDetailsDto = {
            productId: productDetails.productId,
            information: productDetails.information,
            additionalInformation: productDetails.additionalInformation,
            technicalDetails: productDetails.technicalDetails,
            partNumber: productDetails.partNumber,
            modelNumber: productDetails.modelNumber,
            countryOfOrigin: productDetails.countryOfOrigin,
            itemWeight: productDetails.itemWeight,
            itemDimensions: productDetails.itemDimensions,
            packItemCount: productDetails.packItemCount,
        };
        return dto;
    }
}