import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class CategoryValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                name: Joi.string().min(2).max(15).required(),
                description: Joi.string().min(2).max(50).required(),
                parentCategoryId: Joi.number().integer().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                name: Joi.string().min(2).max(15).required(),
                description: Joi.string().min(2).max(50).required(),
                parentCategoryId: Joi.number().integer().required(), 
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}