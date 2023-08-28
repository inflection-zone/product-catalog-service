export interface IProductDto {
    id: string;
    Name: string;
    Description: string;
    CategoryId: string;
    BrandId: string;
    BasePrice: number;
    Taxes: number;
    ManufacturerName: string;
    ManufacturerPartNumber:string;
}

export interface IProductUpdateModel{
    Name? : string,
    Description? : string,
    CategoryId : string;
    BrandId: string;
    BasePrice?: number;
    Taxes?: number;
    ManufacturerName?: string;
    ManufacturerPartNumber?:string;

}