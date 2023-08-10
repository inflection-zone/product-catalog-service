import { CustomerDto } from "../domain.types/customer/customer.dto";
import { CustomerDomainEntity } from "../domain.types/customer/customer.domain.entity";
import express from 'express'
import { Customer } from "../database/models/customer";
import { request } from "http";
import Joi from 'joi';


export class CustomerValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                customerName: Joi.string()
                    .min(1)
                    .max(30)
                    .required(),

                customerTaxNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10),

                phone: Joi.number()
                    .integer(),

                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

                profileImage: Joi.string()
                .min(1)
            })

            return await schema.validateAsync(requestBody)
        }catch(error){
            console.log(error)
        }
    }



    static async validateUpdateRequest(requestBody) {
        try {
            const schema = Joi.object({
                customerName: Joi.string()
                    .min(1)
                    .max(30),

                customerTaxNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10),

                phone: Joi.number()
                    .integer(),

                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

                profileImage: Joi.string()
                .min(1)
            })

            return await schema.validateAsync(requestBody)
        }catch(error){
            console.log(error)
        }
    }

}