import express from 'express'
import {CustomerDomainEntity} from '../../domain.types/customer/customer.domain.entity'
import { CustomerDto } from '../../domain.types/customer/customer.dto'
import { UsingJoinColumnOnlyOnOneSideAllowedError } from 'typeorm'
import { uuid } from '../../domain.types/miscellaneous/system.types'

export interface ICustomerRepo{

    create(model : CustomerDomainEntity) : Promise<CustomerDto>

    get() : Promise<CustomerDto[]>

    getById(id: uuid) : Promise<CustomerDto>

    update(id : uuid, updateModel : CustomerDomainEntity) : Promise<CustomerDto>

    delete(id : uuid) : Promise<boolean>

    login(req: express.Request)

}