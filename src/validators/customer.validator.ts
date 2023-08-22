import Joi from 'joi';


export class CustomerValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                CustomerName: Joi.string()
                    .min(1)
                    .max(30)
                    .required(),

                CustomerTaxNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10),

                Phone: Joi.number()
                    .integer(),

                Email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

                ProfileImage: Joi.string()
                    .min(1),

                Password: Joi.string()
                    .alphanum()
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
                CustomerName: Joi.string()
                    .min(1)
                    .max(30),

                CustomerTaxNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10),

                Phone: Joi.number()
                    .integer(),

                Email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

                ProfileImage: Joi.string()
                .min(1),

                Password: Joi.string()
                .alphanum()
                .min(1)
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}