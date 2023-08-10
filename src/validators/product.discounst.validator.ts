import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductDiscountValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                merchantId: Joi.string(),
                discountType: Joi.string().required(),
                discount: Joi.string().required(),
                discountForVolume: Joi.string().required(),
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
                merchantId: Joi.string(),
                discountType: Joi.string().required(),
                discount: Joi.string().required(),
                discountForVolume: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}
