import { ProductMerchantDomainEntity } from "../../domain.types/product.merchant/product.merchant.domain.entity";
import { ProductMerchantDto } from "../../domain.types/product.merchant/product.merchant.dto";
import { IProductMerchantRepo } from "../repository.interface/product.merchant.repo.interface";
import { Source } from '../database.connector.typeorm'
import { ProductMerchant } from "../models/product.merchant";
import { ProductMerchantMapper } from "../mappers/product.merchant.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";

export class ProductMerchantRepo implements IProductMerchantRepo {

    private _ProductMerchantRepo = Source.getRepository(ProductMerchant)


    create = async (model: ProductMerchantDomainEntity): Promise<ProductMerchantDto> => {
        try {
            const entity = {
                MerchantPrice: model.MerchantPrice,
                es: model.Taxes,
                IncludeShipping: model.IncludeShipping,
                ShippingCharges: model.ShippingCharges,
            }

            const pm = await this._ProductMerchantRepo.create(entity)
            const record = await this._ProductMerchantRepo.save(pm)
            const dto = ProductMerchantMapper.toDto(record)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    get = async (): Promise<ProductMerchantDto[]> => {
        try {
            const pms = await this._ProductMerchantRepo.find()
            const dtos = pms.map(pm => ProductMerchantMapper.toDto(pm))
            return dtos
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    getById = async (id: uuid): Promise<ProductMerchantDto> => {
        try {
            const pm = await this._ProductMerchantRepo.findOne({
                where:
                    { id: id }
            })
            const dto = ProductMerchantMapper.toDto(pm)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    update = async (id: uuid, updateModel: ProductMerchantDomainEntity): Promise<ProductMerchantDto> => {
        try {
            const pm = await this._ProductMerchantRepo.findOne({
                where:
                    { id: id }
            })

            if (updateModel.MerchantPrice != null) {
                pm.MerchantPrice = updateModel.MerchantPrice;
            }
            if (updateModel.Taxes != null) {
                pm.Taxes = updateModel.Taxes;
            } 
            if (updateModel.ShippingCharges != null) {
                pm.ShippingCharges = updateModel.ShippingCharges;
            } 
            if (updateModel.IncludeShipping != null) {
                pm.IncludeShipping = updateModel.IncludeShipping;
            }

            const record = await this._ProductMerchantRepo.save(pm)
            const dto = ProductMerchantMapper.toDto(record)
            return dto

        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    delete = async (id: uuid): Promise<boolean> => {
        try {
            const ProductMerchant = await this._ProductMerchantRepo.findOne({ where: { id: id } })
            const result = await this._ProductMerchantRepo.remove(ProductMerchant)
            return result != null;
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

}