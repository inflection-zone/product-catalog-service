export interface ProductOfferDto {
    id: string;
    productId: string;
    title: string;
    details: string;
}

export interface ProductOfferUpdateModel{
    productId?: string;
    title?: string;
    details?: string;
}