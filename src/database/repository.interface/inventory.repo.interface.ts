import express from 'express'
import {InventoryDomainEntity} from '../../domain.types/inventory/inventory.domain.entity'
import { InventoryDto } from '../../domain.types/inventory/inventory.dto'
import { UsingJoinColumnOnlyOnOneSideAllowedError } from 'typeorm'
import { uuid } from '../../domain.types/miscellaneous/system.types'

export interface IInventoryRepo{

    create(model : InventoryDomainEntity) : Promise<InventoryDto>

    get() : Promise<InventoryDto[]>

    getById(id: uuid) : Promise<InventoryDto>

    update(id : uuid, updateModel : InventoryDomainEntity) : Promise<InventoryDto>

    delete(id : uuid) : Promise<boolean>

}