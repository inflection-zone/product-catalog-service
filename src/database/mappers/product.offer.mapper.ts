
import { ProductOffer } from "../models/product.offer.model"; 
import { IProductOfferDto } from "../../domain.types/product.offer/product.offer.types"; 

export class ProductOfferMapper {
    static toDto = (productOffer: ProductOffer): IProductOfferDto => {
        if (productOffer === null) {
            return null;
        }
        const dto: IProductOfferDto = {
            id: productOffer.id,
            ProductId: productOffer.ProductId.id,
            Title: productOffer.Title,
            Details: productOffer.Details,
        };
        return dto;
    }
static toArrayDto(record: any[]): IProductOfferDto[] {
    if (record === null) {
        return null;
    }

    const dtos: IProductOfferDto[] = [];

    record.forEach((productOffer) => {
        dtos.push({
            id: productOffer.id,
            ProductId: productOffer.ProductId.id,
            Title: productOffer.Title,
            Details: productOffer.Detail
        });
    });
    return dtos;
    }
}