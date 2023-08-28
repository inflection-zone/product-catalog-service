import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class CategoryValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                Name: Joi.string().min(2).max(15).required(),
                Description: Joi.string().min(2).max(50).required(),
                ParentCategoryId: Joi.string(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                Name: Joi.string().min(2).max(15).required(),
                Description: Joi.string().min(2).max(50).required(),
                ParentCategoryId: Joi.string(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}