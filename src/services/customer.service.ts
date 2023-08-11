import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { Customer } from '../database/models/customer'
import {injectable, inject} from 'tsyringe'
import { CustomerDomainEntity } from '../domain.types/customer/customer.domain.entity'
import { ICustomerRepo} from '../database/repository.interface/customer.repo.interface'
import { CustomerRepo } from '../database/repository/customer.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

@injectable()
export class CustomerService {

    private _CustomerRepo : ICustomerRepo

    // constructor(@inject('ICustomerRepo')
    //     private _CustomerRepo : ICustomerRepo){
    //     }
    constructor(){
        this._CustomerRepo = new CustomerRepo()
    }

    public create = async (model: CustomerDomainEntity) => {
        return await this._CustomerRepo.create(model)
    }

    public login = async(req: express.Request) => {
        return await this._CustomerRepo.login(req)
    }

    public get = async () => {
        return await this._CustomerRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._CustomerRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: CustomerDomainEntity) => {
        return await this._CustomerRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._CustomerRepo.delete(id)
    }
}