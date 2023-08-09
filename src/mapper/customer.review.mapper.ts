import { CustomerReviewDto } from "../domain types/customerReview/customer.review.domain.types";
import { CustomerReview } from "../entity/customer.review.model"; // Replace with actual entity name

export class CustomerReviewMapper {
    static toDto = (customerReview: CustomerReview): CustomerReviewDto => {
        if (!customerReview) {
            return null;
        }
        const dto: CustomerReviewDto = {
            id: customerReview.id,
            productId: customerReview.productId,
            customerId: customerReview.customerId,
            verifiedPurchase: customerReview.verifiedPurchase,
            rating: customerReview.rating,
            title: customerReview.title,
            description: customerReview.description,
            foundUsefulCount: customerReview.foundUsefulCount,
        };
        return dto;
    }
}