import { CustomerReview } from "../models/customer.review"; 
import {CustomerReviewDto} from '../../domain.types/customer.review/customer.review.dto'

export class CustomerReviewMapper {
    static toDto = (customerReview: CustomerReview): CustomerReviewDto => {
        if (!customerReview) {
            return null as any;
        }
        const dto: CustomerReviewDto = {
            customerReviewId: customerReview.customerReviewId,
            productId: customerReview.productId,
            customerId: customerReview.customerId,
            VerifiedPurchase: customerReview.VerifiedPurchase,
            Rating: customerReview.Rating,
            Title: customerReview.Title,
            Description: customerReview.Description,
            FoundUsefulCount: customerReview.FoundUsefulCount,
        };
        return dto;
    }
}
