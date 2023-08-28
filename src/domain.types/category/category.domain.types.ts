export interface ICategoryDto {
    id: string;
    Name: string;
    Description: string;
    ParentCategoryId: string | null;
}

export interface ICategoryUpdateModel{
    Name? : string,
    Description? : string,
    ParentCategoryId? : string;

}