export interface CustomerReviewDto {
    id: string;
    productId: string;
    customerId: string;
    verifiedPurchase: boolean;
    rating: number;
    title: string;
    description: string;
    foundUsefulCount: number;
}
export interface CustomerReviewUpdateModel{
    productId?: string;
    customerId?: string;
    verifiedPurchase?: boolean;
    rating?: number;
    title?: string;
    description?: string;
    foundUsefulCount?: number;
}
