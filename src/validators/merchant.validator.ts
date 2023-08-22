import { MerchantDto } from "../domain.types/merchant/merchant.dto";
import { MerchantDomainEntity } from "../domain.types/merchant/merchant.domain.entity"
import express from 'express'
import { Merchant } from "../database/models/merchant";
import { request } from "http";
import Joi from 'joi';
import { join } from "path";


export class MerchantValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({

                MerchantName: Joi.string()
                    .min(1)
                    .required(),

                Email: Joi.string()
                    .min(1)
                    .required(),

                Password: Joi.string()
                .min(1)
                .alphanum()
                .required(),

                Address: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                AverageRatings: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                Url: Joi.string()
                    .min(1)
                    .required(),

                Logo: Joi.string()
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

                MerchantName: Joi.string()
                    .min(1)
                ,

                Email: Joi.string()
                    .min(1)
                ,

                Address: Joi.string()
                    .alphanum()
                    .min(1)
                ,

                AverageRatings: Joi.number()
                    .integer()
                    .min(0)
                ,

                Url: Joi.string()
                    .min(1)
                ,

                Logo: Joi.string()
                    .min(1)

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}