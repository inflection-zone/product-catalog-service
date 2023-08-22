import { IProductDto } from "../../domain.types/product/product.domain.types"; 
import { Product } from "../models/product.model";


export class ProductMapper {
    static toDto = (product: any): IProductDto => {
        if (product === null) {
            return null;
        }
        const dto: IProductDto = {
            id: product.id,
            Name: product.Name,
            Description: product.Description,
            CategoryId: product.CategoryId.id,
            BrandId: product.BrandId.id,
            BasePrice: product.BasePrice,
            Taxes: product.Taxes,
            ManufacturerName: product.ManufacturerName,
            ManufacturerPartNumber: product.ManufacturerPartNumber,
        };
        return dto;
    }

static toArrayDto(record: Product[]): IProductDto[] {
    if (record === null) {
        return null;
    }

    const dtos: IProductDto[] = [];

    record.forEach((product) => {
        dtos.push({
            id: product.id,
            Name: product.Name,
            Description: product.Description,
            CategoryId: product.CategoryId.id,
            BrandId: product.BrandId.id,
            BasePrice: product.BasePrice,
            Taxes: product.Taxes,
            ManufacturerName: product.ManufacturerName,
            ManufacturerPartNumber: product.ManufacturerPartNumber,
        });
    });
    return dtos;
    }
}