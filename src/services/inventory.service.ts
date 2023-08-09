import express from 'express'
import { Source } from '../database/database.connector.typeorm'
import { Inventory } from '../database/models/inventory'
import {injectable, inject} from 'tsyringe'
import { InventoryDomainEntity } from '../domain.types/inventory/inventory.domain.entity'
import { IInventoryRepo } from '../database/repository.interface/inventory.repo.interface'
import { InventoryRepo } from '../database/repository/inventory.repo'
import { uuid } from '../domain.types/miscellaneous/system.types'

@injectable()
export class InventoryService {

    private _InventoryRepo : IInventoryRepo

    // constructor(@inject('IInventoryRepo')
    //     private _InventoryRepo : IInventoryRepo){
    //     }
    constructor(){
        this._InventoryRepo = new InventoryRepo()
    }

    public create = async (model: InventoryDomainEntity) => {
        return await this._InventoryRepo.create(model)
    }


    public get = async () => {
        return await this._InventoryRepo.get()
    }

    
    public getById = async (id: uuid) => {
        return await this._InventoryRepo.getById(id)
    }


    public update = async(id: uuid, updateModel: InventoryDomainEntity) => {
        return await this._InventoryRepo.update(id, updateModel)
    }


    public delete = async(id: uuid) => {
        return await this._InventoryRepo.delete(id)
    }
}