import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductValidator {
    static async validateCreateRequest(requestBody: any) {
        try {

            const schema = Joi.object({
                name: Joi.string().min(2).max(50).required(),
                description: Joi.string().min(2).max(200).required(),
                categoryId: Joi.string(),
                brandId: Joi.string(),
                basePrice: Joi.number().required(),
                taxes: Joi.number().min(0).max(100).required(),
                manufacturerName: Joi.string().min(2).max(50).required(),
                manufacturerPartNumber: Joi.string().required(),
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
                categoryId: Joi.string().required(),
                brandId: Joi.string().required(),
                basePrice: Joi.number().positive().required(),
                taxes: Joi.number().min(0).max(100).required(),
                manufacturerName: Joi.string().min(2).max(50).required(),
                manufacturerPartNumber: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}