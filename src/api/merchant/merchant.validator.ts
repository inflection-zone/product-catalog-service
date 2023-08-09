import { MerchantDto } from "../../domain.types/merchant/merchant.dto";
import { MerchantDomainEntity } from "../../domain.types/merchant/merchant.domain.entity"
import express from 'express'
import { Merchant } from "../../database/models/merchant";
import { request } from "http";
import Joi from 'joi';


export class MerchantValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                id: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(30)
                    .required(),

                name: Joi.string()
                    .min(1)
                    .required(),

                address: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                averageRatings: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                url: Joi.string()
                    .min(1)
                    .required(),

                logo: Joi.string()
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
                id: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(30)
                    .required(),

                name: Joi.string()
                    .min(1)
                    .required(),

                address: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                averageRatings: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                url: Joi.string()
                    .min(1)
                    .required(),

                logo: Joi.string()
                    .min(1)
                    .required()
            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}