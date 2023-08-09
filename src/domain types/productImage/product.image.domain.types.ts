export interface ProductImageDto {
    id : string;     
    productId: string;
    imageUrl: string;
}
export interface ProductImageUpdateModel {
    productId?: string;
    imageUrl?: string;
}     