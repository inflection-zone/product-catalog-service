export interface CategoryDto {
    id: string;
    name: string;
    description: string;
    parentCategoryId: number | null;
}