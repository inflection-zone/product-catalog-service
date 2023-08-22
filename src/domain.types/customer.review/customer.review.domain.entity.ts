import { uuid } from "../miscellaneous/system.types";

////////////////////////////////////////////////////////////

export interface CustomerReviewDomainEntity {
    customerReviewId: uuid;
    productId: uuid;
    customerId: uuid;
    VerifiedPurchase: boolean;
    Rating: number;
    Title: string;
    Description: string;
    FoundUsefulCount: string;
}