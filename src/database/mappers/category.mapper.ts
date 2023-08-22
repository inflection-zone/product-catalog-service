import { ICategoryDto } from "../../domain.types/category/category.domain.types";
import { IProductOfferDto } from "../../domain.types/product.offer/product.offer.types";
import { Category } from "../models/category.model"; 

export class CategoryMapper {
    static toDto = (category: Category): ICategoryDto => {
        if (category === null) {
            return null;
        }
        const dto: ICategoryDto = {
            id: category.id,
            Name: category.Name,
            Description: category.Description,
            ParentCategoryId: category.ParentCategoryId.id,
        };
        return dto;
    }
static toArrayDto(record: any[]): ICategoryDto[] {
    if (record === null) {
        return null;
    }

    const dtos: ICategoryDto[] = [];

    record.forEach((category) => {
        dtos.push({
            id: category.id,
            Name: category.Name,
            Description: category.Description,
            ParentCategoryId: category.ParentCategoryId.id,
        });
    });
    return dtos;
    }
}