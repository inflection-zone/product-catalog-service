import Joi from "joi";
import { ErrorHandler } from '../common/error.handler';
export class BrandValidator{
    static async validateCreateRequst(requestBody: any){
        try {
            const schema = Joi.object({
            name:Joi.string().min(2).max(15).required(),
            logoUrl:Joi.string().min(2).max(15).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error)
        }
    }
    static async validateUpdateRequst(requestBody: any){
        try {
            const schema = Joi.object({
            name:Joi.string().min(2).max(15).required(),
            logoUrl:Joi.string().min(2).max(15).required(),
            });
            return await schema.validateAsync(requestBody);
        } catch (error) {
            ErrorHandler.handleValidationError(error)
        }
    }
}