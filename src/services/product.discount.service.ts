import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { ProductDiscount } from '../database/models/product.discount'
import {injectable, inject} from 'tsyringe'
import { ProductDiscountDomainEntity } from '../domain.types/product.discount/product.discount.domain.entity'
import { ProductDiscountRepo } from '../database/repository/product.discount.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

//@injectable()
export class ProductDiscountService {

    private _ProductDiscountRepo 

    // constructor(@inject('IProductDiscountRepo')
    //     private _ProductDiscountRepo : IProductDiscountRepo){
    //     }
    constructor(){
        this._ProductDiscountRepo = new ProductDiscountRepo()
    }

    public create = async (model: ProductDiscountDomainEntity) => {
        return await this._ProductDiscountRepo.create(model)
    }

    public login = async(req: express.Request) => {
        return await this._ProductDiscountRepo.login(req)
    }

    public get = async () => {
        return await this._ProductDiscountRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._ProductDiscountRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: ProductDiscountDomainEntity) => {
        return await this._ProductDiscountRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._ProductDiscountRepo.delete(id)
    }
}