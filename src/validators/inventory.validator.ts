import { InventoryDto } from "../domain.types/inventory/inventory.dto";
import {InventoryDomainEntity} from "../domain.types/inventory/inventory.domain.entity"
import express from 'express'
import { Inventory } from "../database/models/inventory";
import { request } from "http";
import Joi from 'joi';


export class InventoryValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                // productId: Joi.string()
                //     .alphanum()
                //     .min(1)
                //     .max(30)
                //     .required(),

                merchantId: Joi.string()
                    .min(1)
                    .required(),

                BatchNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                TotalStock: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                CurrentStock: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                Units: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                UnitsOfMeasure: Joi.string()
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
                productId: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(30)
                ,

                merchantId: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10)
                ,

                BatchNumber: Joi.string()
                    .alphanum()
                    .min(1)
                ,

                TotalStock: Joi.number()
                    .integer()
                    .min(0)
                ,

                CurrentStock: Joi.number()
                    .integer()
                    .min(0)
                ,

                Units: Joi.number()
                    .integer()
                    .min(0)
                ,

                UnitsOfMeasure: Joi.string()

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}