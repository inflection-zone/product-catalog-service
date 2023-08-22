import Joi, { required } from 'joi';


export class ProductDiscountValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                productId: Joi.string()
                    .min(1)
                    .required(),

                merchantId: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                DiscountType: Joi.string()
                    .min(1)
                    .required(),

                Discount: Joi.number()
                    .required(),

                DiscountForVolume: Joi.number()
                    .required(),

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }



    static async validateUpdateRequest(requestBody) {
        try {
            const schema = Joi.object({
                productId: Joi.string()
                    .min(1)
                ,

                merchantId: Joi.string()
                    .alphanum()
                    .min(1),

                DiscountType: Joi.string()
                    .min(1)
                ,

                Discount: Joi.number()
                ,

                DiscountForVolume: Joi.number()
                ,
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}