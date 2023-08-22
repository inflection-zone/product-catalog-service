import Joi from 'joi';


export class CustomerReviewValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                productId: Joi.string()
                    .min(1)
                    .required(),

                customerId: Joi.string()
                    .min(1)
                    .required(),

                VerifiedPurchase: Joi.boolean()
                    .required(),

                Title: Joi.string()
                    .required()
                    .min(1),

                Description: Joi.string()
                    .required()
                    .min(1),

                Rating: Joi.number()
                    .required()
                    .min(1),

                FoundUsefulContent: Joi.string()
                    .required()
                    .min(1)
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
                customerId: Joi.string()
                    .min(1)
                ,
                VerifiedPurchase: Joi.boolean()
                    .required(),
                Title: Joi.string()

                    .min(1),
                Description: Joi.string()

                    .min(1),
                Rating: Joi.number()

                    .min(1),
                FoundUsefulContent: Joi.string()
                    .min(1)
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}