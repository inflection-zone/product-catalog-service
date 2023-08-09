export interface ProductDetailsDto {
    productId: string;
    information: string;
    additionalInformation: string;
    technicalDetails: string;
    partNumber: string;
    modelNumber: string;
    countryOfOrigin: string;
    itemWeight: number;
    itemDimensions: string;
    packItemCount: number;
}

export interface ProductDetailsUpdateModel {
    productId: string;
    information?: string;
    additionalInformation?: string;
    technicalDetails?: string;
    partNumber: string;
    modelNumber: string;
    countryOfOrigin?: string;
    itemWeight?: number;
    itemDimensions?: string;
    packItemCount?: number;
}