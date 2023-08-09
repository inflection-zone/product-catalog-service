import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { ProductMerchant } from '../database/models/product.merchant'
import {injectable, inject} from 'tsyringe'
import { ProductMerchantDomainEntity } from '../domain.types/product.merchant/product.merchant.domain.entity'
import { IProductMerchantRepo} from '../database/repository.interface/product.merchant.repo.interface'
import { ProductMerchantRepo } from '../database/repository/product.merchant.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

//@injectable()
export class ProductMerchantService {

    private _ProductMerchantRepo : IProductMerchantRepo

    // constructor(@inject('IProductMerchantRepo')
    //     private _ProductMerchantRepo : IProductMerchantRepo){
    //     }
    constructor(){
        this._ProductMerchantRepo = new ProductMerchantRepo()
    }

    public create = async (model: ProductMerchantDomainEntity) => {
        return await this._ProductMerchantRepo.create(model)
    }


    public get = async () => {
        return await this._ProductMerchantRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._ProductMerchantRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: ProductMerchantDomainEntity) => {
        return await this._ProductMerchantRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._ProductMerchantRepo.delete(id)
    }
}