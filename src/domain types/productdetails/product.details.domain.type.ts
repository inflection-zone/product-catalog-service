export interface ProductDetailsDto {
    ProductId: string;
    Information: string;
    AdditionalInformation: string;
    TechnicalDetails: string;
    PartNumber: string;
    ModelNumber: string;
    CountryOfOrigin: string;
    ItemWeight: number;
    ItemDimensions: string;
    PackItemCount: number;
}

export interface IProductDetailsUpdateModel {
    ProductId: string;
    Information?: string;
    AdditionalInformation?: string;
    TechnicalDetails?: string;
    PartNumber: string;
    ModelNumber: string;
    CountryOfOrigin?: string;
    ItemWeight?: number;
    ItemDimensions?: string;
    PackItemCount?: number;
}