import { ProductMerchantDto } from "../domain.types/product.merchant/product.merchant.dto";
import { ProductMerchantDomainEntity } from "../domain.types/product.merchant/product.merchant.domain.entity"
import express from 'express'
import { ProductMerchant } from "../database/models/product.merchant";
import { request } from "http";
import Joi from 'joi';


export class ProductMerchantValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({

                MerchantPrice: Joi.number()
                    .min(9)
                    .required(),

                Taxes: Joi.number()
                    .min(0)
                    .required(),

                IncludeShipping: Joi.boolean()
                    .required(),

                ShippingCharges: Joi.number()
                    .min(0)
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

                MerchantPrice: Joi.number()
                    .min(9)
                ,

                Taxes: Joi.number()
                    .min(0)
                ,

                IncludeShipping: Joi.boolean()
                ,

                ShippingCharges: Joi.number()
                    .min(0)
                ,

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}