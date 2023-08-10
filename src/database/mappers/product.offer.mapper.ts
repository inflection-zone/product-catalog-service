
import { ProductOffer } from "../models/product.offer.model"; 
import { ProductOfferDto } from "../../domain types/productOffer/product.offer.types"; 

export class ProductOfferMapper {
    static toDto = (productOffer: ProductOffer): ProductOfferDto => {
        if (productOffer === null) {
            return null;
        }
        const dto: ProductOfferDto = {
            id: productOffer.id,
            productId: productOffer.productId,
            title: productOffer.title,
            details: productOffer.details,
        };
        return dto;
    }
}