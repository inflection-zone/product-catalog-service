import express from 'express'
import {ProductMerchantDomainEntity} from '../../domain.types/product.merchant/product.merchant.domain.entity'
import { ProductMerchantDto } from '../../domain.types/product.merchant/product.merchant.dto'
import { UsingJoinColumnOnlyOnOneSideAllowedError } from 'typeorm'
import { uuid } from '../../domain.types/miscellaneous/system.types'

export interface IProductMerchantRepo{

    create(model : ProductMerchantDomainEntity) : Promise<ProductMerchantDto>

    get() : Promise<ProductMerchantDto[]>

    getById(id: uuid) : Promise<ProductMerchantDto>

    update(id : uuid, updateModel : ProductMerchantDomainEntity) : Promise<ProductMerchantDto>

    delete(id : uuid) : Promise<boolean>

}