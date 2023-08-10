import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductImageValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                imageUrl: Joi.string().required(),
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
                imageUrl: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}