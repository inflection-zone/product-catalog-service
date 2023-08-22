import { InventoryDomainEntity } from "../../domain.types/inventory/inventory.domain.entity";
import { InventoryDto } from "../../domain.types/inventory/inventory.dto";
import { IInventoryRepo } from "../repository.interface/inventory.repo.interface";
import {Source} from '../database.connector.typeorm'
import { Inventory } from "../models/inventory";
import { Merchant } from "../models/merchant";
import { InventoryMapper } from "../mappers/inventory.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { MerchantValidator } from "../../validators/merchant.validator";
import { createJwtToken } from "../../auth/authenticator";

export class InventoryRepo implements IInventoryRepo {

    private _InventoryRepo = Source.getRepository(Inventory)
    //private _MerchantRepo = Source.getRepository(Merchant)


    create = async(model: InventoryDomainEntity) : Promise<InventoryDto> => {
        try{

            const merchant = await Source.getRepository(Merchant).findOne({where:
            {merchantId : model.merchantId}})

            if(merchant == null){
                throw new ApiError(500, "Specified merchant does not exist")
            }

            const entity = {
                merchantId : merchant,
                BatchNumber : model.BatchNumber,
                TotalStock : model.TotalStock,
                CurrentStock : model.CurrentStock,
                Units : model.Units,
                UnitsOfMeasure : model.UnitsOfMeasure
            }
    
            const inventory = await this._InventoryRepo.create(entity)
            const record = await this._InventoryRepo.save(inventory)
            const dto = InventoryMapper.toDto(record)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    merchantLogin = async(req: express.Request) => {
        try{
            const payload = {
                Email : req.body.Email
            }

            const merchant = await Source.getRepository(Merchant).findOne({where:
            {Email : payload.Email}})
            
            if(merchant.Password === req.body.Password){
                const token = createJwtToken(payload)
                console.log(token)
                return token
            }
        }catch(error){
            throw new ApiError(500, "Invalid username or password")
        }
    }


    get = async() : Promise<InventoryDto[]> => {
        try{
            const Inventories = await this._InventoryRepo.find()
            const dtos = Inventories.map(Inventory => InventoryMapper.toDto(Inventory))
            return dtos
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    getById = async(id: uuid) : Promise<InventoryDto> => {
        try{
            const Inventory = await this._InventoryRepo.findOne({where : 
                {id: id}
            })
            const dto = InventoryMapper.toDto(Inventory)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    update = async(id: uuid, updateModel: InventoryDomainEntity) : Promise<InventoryDto> => {
        try{
            const inventory = await this._InventoryRepo.findOne({where : 
                {id: id}})

            if(updateModel.BatchNumber != null){
                inventory.BatchNumber = updateModel.BatchNumber;
            }
            if(updateModel.TotalStock != null){
                inventory.TotalStock = updateModel.TotalStock;
            }if(updateModel.CurrentStock != null){
                inventory.CurrentStock = updateModel.CurrentStock;
            }
            if(updateModel.Units != null){
                inventory.Units = updateModel.Units;
            }
            if(updateModel.UnitsOfMeasure!= null){
                inventory.UnitsOfMeasure = updateModel.UnitsOfMeasure;
            }

            const record = await this._InventoryRepo.save(inventory)
            const dto = InventoryMapper.toDto(record)
            return dto
           
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    delete = async(id: uuid) : Promise<boolean> => {
        try{
            const Inventory = await this._InventoryRepo.findOne({where :{id:id}})
            const result = await this._InventoryRepo.remove(Inventory)
            return result != null;
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }

}