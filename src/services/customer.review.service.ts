import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { CustomerReview } from '../database/models/customer.review'
import {injectable, inject} from 'tsyringe'
import { CustomerReviewDomainEntity } from '../domain.types/customer.review/customer.review.domain.entity'
import { CustomerReviewRepo } from '../database/repository/customer.review.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

//@injectable()
export class CustomerReviewService {

    private _CustomerReviewRepo 

    // constructor(@inject('ICustomerRepo')
    //     private _CustomerReviewRepo : ICustomerRepo){
    //     }
    constructor(){
        this._CustomerReviewRepo = new CustomerReviewRepo()
    }

    public create = async (model: CustomerReviewDomainEntity) => {
        return await this._CustomerReviewRepo.create(model)
    }

    public login = async(req: express.Request) => {
        return await this._CustomerReviewRepo.login(req)
    }

    public get = async () => {
        return await this._CustomerReviewRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._CustomerReviewRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: CustomerReviewDomainEntity) => {
        return await this._CustomerReviewRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._CustomerReviewRepo.delete(id)
    }
}