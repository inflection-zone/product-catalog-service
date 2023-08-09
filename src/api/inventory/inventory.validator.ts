import { InventoryDto } from "../../domain.types/inventory/inventory.dto";
import {InventoryDomainEntity} from "../../domain.types/inventory/inventory.domain.entity"
import express from 'express'
import { Inventory } from "../../database/models/inventory";
import { request } from "http";
import Joi from 'joi';


export class InventoryValidator {
    static async validateCreateRequest(requestBody) {
        try {
            const schema = Joi.object({
                productId: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(30)
                    .required(),

                merchantId: Joi.string()
                    .alphanum()
                    .min(1)
                    .max(10)
                    .required(),

                batchNumber: Joi.string()
                    .alphanum()
                    .min(1)
                    .required(),

                totalStock: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                currentStock: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                units: Joi.number()
                    .integer()
                    .min(0)
                    .required(),

                unitsOfMeasure: Joi.string()
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

                batchNumber: Joi.string()
                    .alphanum()
                    .min(1)
                ,

                totalStock: Joi.number()
                    .integer()
                    .min(0)
                ,

                currentStock: Joi.number()
                    .integer()
                    .min(0)
                ,

                units: Joi.number()
                    .integer()
                    .min(0)
                ,

                unitsOfMeasure: Joi.string()

            })

            return await schema.validateAsync(requestBody)
        } catch (error) {
            console.log(error)
        }
    }

}