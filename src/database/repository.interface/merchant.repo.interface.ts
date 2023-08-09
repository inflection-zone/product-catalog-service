import express from 'express'
import {MerchantDomainEntity} from '../../domain.types/merchant/merchant.domain.entity'
import { MerchantDto } from '../../domain.types/merchant/merchant.dto'
import { UsingJoinColumnOnlyOnOneSideAllowedError } from 'typeorm'
import { uuid } from '../../domain.types/miscellaneous/system.types'

export interface IMerchantRepo{

    create(model : MerchantDomainEntity) : Promise<MerchantDto>

    get() : Promise<MerchantDto[]>

    getById(id: uuid) : Promise<MerchantDto>

    update(id : uuid, updateModel : MerchantDomainEntity) : Promise<MerchantDto>

    delete(id : uuid) : Promise<boolean>

}