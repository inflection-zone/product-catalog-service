export interface ProductDto {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    brandId: string;
    basePrice: number;
    taxes: number;
    manufacturerName: string;
    manufacturerPartNumber:string;
}

export interface ProductUpdateModel{
    name? : string,
    description? : string,
    categoryId : string;
    brandId: string;
    basePrice?: number;
    taxes?: number;
    manufacturerName?: string;
    manufacturerPartNumber?:string;

}