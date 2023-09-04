import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';

export class FeatureValidator {
    static async validateCreateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                Name: Joi.string().min(1).max(30).required(),
                Description: Joi.string().min(1).max(10).required(),
                ImageUrl: Joi.string().min(1).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
           console.log(error);
        }
    }

    static async validateUpdateRequest(requestBody: any) {
        try {
            const schema = Joi.object({
                Name: Joi.string().min(1).max(30),
                Description: Joi.string().min(1).max(10),
                ImageUrl: Joi.string().min(1),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            console.log(error) 
}
}
}            
         