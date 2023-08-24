import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class ProductDetailsValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                ProductId: Joi.string(),
                Information: Joi.string().required(),
                AdditionalInformation: Joi.string().required(),
                TechnicalDetails: Joi.string().required(),
                PartNumber: Joi.string().required(),
                ModelNumber: Joi.string().required(),
                CountryOfOrigin: Joi.string().required(),
                ItemWeight: Joi.number().required(),
               ItemDimensions: Joi.string().required(),
                PackItemCount: Joi.number().required(),
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
                Information: Joi.string().required(),
                AdditionalInformation: Joi.string().required(),
                TechnicalDetails: Joi.string().required(),
                PartNumber: Joi.string().required(),
                ModelNumber: Joi.string().required(),
                CountryOfOrigin: Joi.string().required(),
                ItemWeight: Joi.number().required(),
               ItemDimensions: Joi.string().required(),
                PackItemCount: Joi.number().required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error);
        }
    }
}