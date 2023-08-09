import { InventoryDomainEntity } from "../../domain.types/inventory/inventory.domain.entity";
import { InventoryDto } from "../../domain.types/inventory/inventory.dto";
import { IInventoryRepo } from "../repository.interface/inventory.repo.interface";
import {Source} from '../database.connector.typeorm'
import { Inventory } from "../models/inventory";
import { InventoryMapper } from "../mappers/inventory.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";

export class InventoryRepo implements IInventoryRepo {

    private _InventoryRepo = Source.getRepository(Inventory)


    create = async(model: InventoryDomainEntity) : Promise<InventoryDto> => {
        try{
            const entity = {
                batchNumber : model.batchNumber,
                totalStock : model.totalStock,
                currentStock : model.currentStock,
                units : model.units,
                unitsOfMeasure : model.unitsOfMeasure
            }
    
            const inventory = await this._InventoryRepo.create(entity)
            const record = await this._InventoryRepo.save(inventory)
            const dto = InventoryMapper.toDto(record)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    get = async() : Promise<InventoryDto[]> => {
        try{
            const Inventorys = await this._InventoryRepo.find()
            const dtos = Inventorys.map(Inventory => InventoryMapper.toDto(Inventory))
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

            if(updateModel.batchNumber != null){
                inventory.batchNumber = updateModel.batchNumber;
            }
            if(updateModel.totalStock != null){
                inventory.totalStock = updateModel.totalStock;
            }if(updateModel.currentStock != null){
                inventory.currentStock = updateModel.currentStock;
            }
            if(updateModel.units != null){
                inventory.units = updateModel.units;
            }
            if(updateModel.unitsOfMeasure!= null){
                inventory.unitsOfMeasure = updateModel.unitsOfMeasure;
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