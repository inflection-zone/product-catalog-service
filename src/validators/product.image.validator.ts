import Joi from 'joi';


export class ProductImageValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                ImageUrl: Joi.string()
                    .min(1)
                    .required()
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }



    static async validateUpdateRequest(requestBody) {
        try {
            const schema = Joi.object({
                ImageUrl: Joi.string()
                    .min(1)
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}