import { uuid } from "../miscellaneous/system.types";
import { CustomerReviewDto } from "./customer.review.dto";


////////////////////////////////////////////////////////////


export interface CustomerReviewSearchFilters {
    customerReviewId: uuid;
    productId: uuid;
    customerId: uuid;
    VerifiedPurchase: boolean;
    Rating: number;
    Title: string;
    Description: string;
    FoundUsefulCount: string;
}


////////////////////////////////////////////////////////////


export interface CustomerSearchResults {
    Items: CustomerReviewDto[];
}