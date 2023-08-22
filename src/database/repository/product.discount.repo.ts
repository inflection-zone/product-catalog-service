import { ProductDiscountDomainEntity } from "../../domain.types/product.discount/product.discount.domain.entity";
import { ProductDiscountDto } from "../../domain.types/product.discount/product.discount.dto";
import { Source } from '../database.connector.typeorm'
import { ProductDiscount } from "../models/product.discount";
import { ProductDiscountMapper } from "../mappers/product.discount.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { createJwtToken } from "../../auth/authenticator";

export class ProductDiscountRepo {

    private _ProductDiscountRepo = Source.getRepository(ProductDiscount)


    create = async (model: ProductDiscountDomainEntity): Promise<ProductDiscountDto> => {
        try {
            const entity = {
                productDiscountId: model.productDiscountId,
                productId: model.productId,
                merchantId: model.merchantId,
                DiscountType: model.DiscountType,
                Discount: model.Discount,
                DiscountForVolume: model.DiscountForVolume,
            }

            const productDiscount = await this._ProductDiscountRepo.create(entity)
            const record = await this._ProductDiscountRepo.save(productDiscount)
            const dto = ProductDiscountMapper.toDto(record)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

    // login = async (req: express.Request) => {
    //     const payload = {
    //         Email: req.body.Email
    //     }
    //     const productDiscount = await this._productDiscountRepo.findOne({
    //         where: {
    //             Email: payload.Email
    //         }
    //     })

    //     if (productDiscount.Password === req.body.Password) {
    //         const token = createJwtToken(payload)
    //         return token
    //     }
    //     else {
    //         return "Invalid username or password"
    //     }
    // }

    get = async (): Promise<ProductDiscountDto[]> => {
        try {
            const productDiscounts = await this._ProductDiscountRepo.find()
            const dtos = productDiscounts.map(productDiscount => ProductDiscountMapper.toDto(productDiscount))
            return dtos
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    getById = async (id: uuid): Promise<ProductDiscountDto> => {
        try {
            const productDiscount = await this._ProductDiscountRepo.findOne({
                where:
                    { productDiscountId: id }
            })
            const dto = ProductDiscountMapper.toDto(productDiscount)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    update = async (id: uuid, updateModel: ProductDiscountDomainEntity): Promise<ProductDiscountDto> => {
        try {
            const productDiscount = await this._ProductDiscountRepo.findOne({
                where:
                    { productDiscountId: id }
            })

            if (updateModel.productDiscountId != null) {
                productDiscount.productDiscountId = updateModel.productDiscountId;
            }
            if (updateModel.productId != null) {
                productDiscount.productId = updateModel.productId;
            } if (updateModel.merchantId != null) {
                productDiscount.merchantId = updateModel.merchantId;
            }
            if (updateModel.DiscountType != null) {
                productDiscount.DiscountType = updateModel.DiscountType;
            }
            if (updateModel.Discount != null) {
                productDiscount.Discount = updateModel.Discount;
            }
            if (updateModel.DiscountForVolume != null) {
                productDiscount.DiscountForVolume = updateModel.DiscountForVolume;
            }

            const record = await this._ProductDiscountRepo.save(productDiscount)
            const dto = ProductDiscountMapper.toDto(record)
            return dto

        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    delete = async (id: uuid): Promise<boolean> => {
        try {
            const productDiscount = await this._ProductDiscountRepo.findOne({
                where:
                    { productId: id }
            })
            const result = await this._ProductDiscountRepo.remove(productDiscount)
            return result != null;
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

}