import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductValidator {
    static async validateCreateRequest(requestBody: any) {
        try {

            const schema = Joi.object({
                Name: Joi.string().min(2).max(50).required(),
                Description: Joi.string().min(2).max(200).required(),
                CategoryId: Joi.string(),
                BrandId: Joi.string(),
                BasePrice: Joi.number().required(),
                Taxes: Joi.number().min(0).max(100).required(),
                ManufacturerName: Joi.string().min(2).max(50).required(),
                ManufacturerPartNumber: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                Name: Joi.string().min(2).max(50).required(),
                Description: Joi.string().min(2).max(200).required(),
                CategoryId: Joi.string(),
                BrandId: Joi.string(),
                BasePrice: Joi.number().required(),
                Taxes: Joi.number().min(0).max(100).required(),
                ManufacturerName: Joi.string().min(2).max(50).required(),
                ManufacturerPartNumber: Joi.string().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}