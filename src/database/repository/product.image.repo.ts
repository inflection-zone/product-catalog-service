import { ProductImageDomainEntity } from "../../domain.types/product.image/product.image.domain.entity";
import { ProductImageDto } from "../../domain.types/product.image/product.image.dto";
import { Source } from '../database.connector.typeorm'
import { ProductImage } from "../models/product.image";
import { ProductImageMapper } from "../mappers/product.image.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { createJwtToken } from "../../auth/authenticator";

export class ProductImageRepo {

    private _ProductImageRepo = Source.getRepository(ProductImage)


    create = async (model: ProductImageDomainEntity): Promise<ProductImageDto> => {
        try {
            const entity = {
                productImageId: model.productImageId,
                ImageUrl: model.ImageUrl,
            }

            const record = await this._ProductImageRepo.save(entity)
            const dto = ProductImageMapper.toDto(record)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

    // login = async (req: express.Request) => {
    //     const payload = {
    //         Email: req.body.Email
    //     }
    //     const ProductImage = await this._ProductImageRepo.findOne({
    //         where: {
    //             Email: payload.Email
    //         }
    //     })

    //     if (ProductImage.Password === req.body.Password) {
    //         const token = createJwtToken(payload)
    //         return token
    //     }
    //     else {
    //         return "Invalid username or password"
    //     }
    // }

    get = async (): Promise<ProductImageDto[]> => {
        try {
            const productImages = await this._ProductImageRepo.find()
            const dtos = productImages.map(productImage => ProductImageMapper.toDto(productImage))
            return dtos
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    getById = async (id: uuid): Promise<ProductImageDto> => {
        try {
            const productImage = await this._ProductImageRepo.findOne({
                where:
                    { productImageId: id }
            })
            const dto = ProductImageMapper.toDto(productImage)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    update = async (id: string, updateModel: ProductImageDomainEntity): Promise<ProductImageDto> => {
        try {
            const ProductImage = await this._ProductImageRepo.findOne({
                where:
                    { productImageId: id }
            })

            if (updateModel.productImageId != null) {
                ProductImage.productImageId = updateModel.productImageId;
            }
            if (updateModel.ImageUrl != null) {
                ProductImage.ImageUrl = updateModel.ImageUrl;
            }

            const record = await this._ProductImageRepo.save(ProductImage)
            const dto = ProductImageMapper.toDto(record)
            return dto

        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    delete = async (id: uuid): Promise<boolean> => {
        try {
            const ProductImage = await this._ProductImageRepo.findOne({
                where:
                    { productImageId: id }
            })
            const result = await this._ProductImageRepo.remove(ProductImage)
            return result != null;
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

}