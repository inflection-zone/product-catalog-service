export interface CategoryDto {
    id: string;
    name: string;
    description: string;
    parentCategoryId: string | null;
}

export interface CategoryUpdateModel{
    name? : string,
    description? : string,
    parentCategoryId? : string;

}