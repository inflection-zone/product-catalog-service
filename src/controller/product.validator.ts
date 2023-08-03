import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductValidator {
    static async validateCreateRequest(requestBody: any) {
        try {

            const schema = Joi.object({
                name: Joi.string().min(2).max(50).required(),
                description: Joi.string().min(2).max(200).required(),
                categoryId: Joi.number().integer().max(50).required(),
                brandId: Joi.number().integer().max(50).required(),
                basePrice: Joi.number().positive().required(),
                taxes: Joi.number().min(0).required(),
                manufacturerName: Joi.string().min(2).max(50).required(),
                manufacturerPartNumber: Joi.number().integer().min(2).max(50).required(),
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
                categoryId: Joi.number().integer().min(2).max(50).required(),
                brandId: Joi.number().integer().min(2).max(50).required(),
                basePrice: Joi.number().positive().required(),
                taxes: Joi.number().min(0).required(),
                manufacturerName: Joi.string().min(2).max(50).required(),
                manufacturerPartNumber: Joi.number().integer().min(2).max(50).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}