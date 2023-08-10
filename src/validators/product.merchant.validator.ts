import { ProductMerchantDto } from "../domain.types/product.merchant/product.merchant.dto";
import {ProductMerchantDomainEntity} from "../domain.types/product.merchant/product.merchant.domain.entity"
import express from 'express'
import { ProductMerchant } from "../database/models/product.merchant";
import { request } from "http";
import Joi from 'joi';


export class ProductMerchantValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
    
                merchantPrice: Joi.number()
                    .min(9)
                    .required(),

                taxes: Joi.number()
                    .min(0)
                    .required(),

                includeShipping: Joi.boolean()
                    .required(),

                shippingCharges: Joi.number()
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
    
                merchantPrice: Joi.number()
                    .min(9)
                    .required(),

                taxes: Joi.number()
                    .min(0)
                    .required(),

                includeShipping: Joi.boolean()
                    .required(),

                shippingCharges: Joi.number()
                    .min(0)
                    .required(),

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}