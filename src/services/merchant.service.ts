import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { Merchant } from '../database/models/merchant'
import {injectable, inject} from 'tsyringe'
import { MerchantDomainEntity } from '../domain.types/merchant/merchant.domain.entity'
import { IMerchantRepo} from '../database/repository.interface/merchant.repo.interface'
import { MerchantRepo } from '../database/repository/merchant.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

//@injectable()
export class MerchantService {

    private _MerchantRepo : IMerchantRepo

    // constructor(@inject('IMerchantRepo')
    //     private _MerchantRepo : IMerchantRepo){
    //     }
    constructor(){
        this._MerchantRepo = new MerchantRepo()
    }

    public create = async (model: MerchantDomainEntity) => {
        return await this._MerchantRepo.create(model)
    }


    public get = async () => {
        return await this._MerchantRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._MerchantRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: MerchantDomainEntity) => {
        return await this._MerchantRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._MerchantRepo.delete(id)
    }
}