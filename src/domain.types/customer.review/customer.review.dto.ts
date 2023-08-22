import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface CustomerReviewDto{
    customerReviewId: uuid;
    productId: uuid;
    customerId: uuid;
    VerifiedPurchase: boolean;
    Rating: number;
    Title: string;
    Description: string;
    FoundUsefulCount: string;
}