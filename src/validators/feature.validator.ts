import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class FeatureValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                name: Joi.string().min(2).max(50).required(),
                description: Joi.string().min(2).max(200).required(),
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
                name: Joi.string().min(2).max(50).required(),
                description: Joi.string().min(2).max(200).required(),
                imageUrl: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}
