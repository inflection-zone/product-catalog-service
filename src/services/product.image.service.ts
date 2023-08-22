import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { ProductImage } from '../database/models/product.image'
import {injectable, inject} from 'tsyringe'
import { ProductImageDomainEntity } from '../domain.types/product.image/product.image.domain.entity'
import { ProductImageRepo } from '../database/repository/product.image.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

//@injectable()
export class ProductImageService {

    private _ProductImageRepo 

    // constructor(@inject('IProductImageRepo')
    //     private _ProductImageRepo : IProductImageRepo){
    //     }
    constructor(){
        this._ProductImageRepo = new ProductImageRepo()
    }

    public create = async (model: ProductImageDomainEntity) => {
        return await this._ProductImageRepo.create(model)
    }

    public login = async(req: express.Request) => {
        return await this._ProductImageRepo.login(req)
    }

    public get = async () => {
        return await this._ProductImageRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._ProductImageRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: ProductImageDomainEntity) => {
        return await this._ProductImageRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._ProductImageRepo.delete(id)
    }
}