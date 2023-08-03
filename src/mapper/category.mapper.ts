import { CategoryDto } from "../domain types/category/category.domain.types";
import { Category } from "../entity/category.model";

export class CategoryMapper {
    static toDto = (category: Category): CategoryDto => {
        if (category === null) {
            return null;
        }
        const dto: CategoryDto = {
            id: category.id,
            name: category.name,
            description: category.description,
            parentCategoryId: category.parentCategoryId,
        };
        return dto;
    }
}