import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductOfferValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                title: Joi.string().min(2).max(50).required(),
                details: Joi.string().min(2).max(200).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string().required(),
                title: Joi.string().min(2).max(50).required(),
                details: Joi.string().min(2).max(200).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}
