import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductDetailsValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                productId: Joi.string(),
                information: Joi.string().required(),
                additionalInformation: Joi.string().required(),
                technicalDetails: Joi.string().required(),
                partNumber: Joi.string().required(),
                modelNumber: Joi.string().required(),
                countryOfOrigin: Joi.string().required(),
                itemWeight: Joi.number().required(),
                itemDimensions: Joi.string().required(),
                packItemCount: Joi.number().required(),
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
                information: Joi.string().required(),
                additionalInformation: Joi.string().required(),
                technicalDetails: Joi.string().required(),
                partNumber: Joi.string().required(),
                modelNumber: Joi.string().required(),
                countryOfOrigin: Joi.string().required(),
                itemWeight: Joi.number().required(),
                itemDimensions: Joi.string().required(),
                packItemCount: Joi.number().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}