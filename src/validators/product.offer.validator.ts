import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductOfferValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                ProductId: Joi.string(),
                Title: Joi.string().min(2).max(50).required(),
                Details: Joi.string().min(2).max(200).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                ProductId: Joi.string(),
                Title: Joi.string().min(2).max(50).required(),
                Details: Joi.string().min(2).max(200).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}
