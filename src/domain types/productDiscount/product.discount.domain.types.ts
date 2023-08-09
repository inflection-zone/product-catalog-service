export interface ProductDiscountDto {
    productId: string;
    merchantId: string;
    discountType: string;
    discount: string;
    discountForVolume:string;
}

export interface ProductDiscountUpdateModel {
    productId: string;
    merchantId: string;
    discountType?: string;
    discount?: string;
    discountForVolume?:string;
}