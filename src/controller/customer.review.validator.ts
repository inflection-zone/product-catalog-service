import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class CustomerReviewValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                customerId: Joi.string(),
                verifiedPurchase: Joi.boolean().required(),
                rating: Joi.number().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
                foundUsefulCount: Joi.number().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                customerId: Joi.string(),
                verifiedPurchase: Joi.boolean().required(),
                rating: Joi.number().required(),
                title: Joi.string().required(),
                description: Joi.string().required(),
                foundUsefulCount: Joi.number().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}
