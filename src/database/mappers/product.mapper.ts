import { ProductDto } from "../../domain types/product/product.domain.types"; 
import { Product } from "../models/product.model"; 

export class ProductMapper {
    static toDto = (product: Product): ProductDto => {
        if (product === null) {
            return null;
        }
        const dto: ProductDto = {
            id: product.id,
            name: product.name,
            description: product.description,
            categoryId: product.categoryId,
            brandId: product.brandId,
            basePrice: product.basePrice,
            taxes: product.taxes,
            manufacturerName: product.manufacturerName,
            manufacturerPartNumber: product.manufacturerPartNumber,
        };
        return dto;
    }
}