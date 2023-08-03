export interface ProductDto {
    id: string;
    name: string;
    description: string;
    categoryId: number;
    brandId: number;
    basePrice: number;
    taxes: number;
    manufacturerName: string;
    manufacturerPartNumber:number;
}