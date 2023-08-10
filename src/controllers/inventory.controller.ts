import express from 'express'
import { InventoryService } from '../services/inventory.service'
import { Inventory } from '../database/models/inventory'
import { InventoryValidator } from '../validators/inventory.validator'
import { uuid } from '../domain.types/miscellaneous/system.types'
import { ApiError } from '../common/api.error'
import { ResponseHandler } from '../common/response.handler'


export class InventoryController{

    private _service   : InventoryService 
    private _validator : InventoryValidator


    constructor(){
        this._service = new InventoryService();
        this._validator = new InventoryValidator();
    }


    public create = async(req: express.Request, res: express.Response) => {
        try{
            const createModel = await InventoryValidator.validateCreateRequest(req.body)
            const inventory = await this._service.create(createModel)

            if(inventory == null){
                throw new ApiError(500, "Could not create inventory!")
            }

            ResponseHandler.success(req, res, "inventory created successfully", 201,
            {Inventory : inventory})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public get = async(req: express.Request, res: express.Response) => {
        try {
            const inventories = await this._service.get()

            ResponseHandler.success(req, res, "Inventories fetched successfully", 201,
            {Inventorys : inventories})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async(req: express.Request, res: express.Response) => {
        try {
            const inventory = await this._service.getById(req.params.id)

            if(inventory == null){
                throw new ApiError(500, "Could not find inventory!")
            }

            ResponseHandler.success(req, res, "Inventory fetched successfully", 201,
            {Inventory : inventory})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async(req: express.Request, res: express.Response) => {
        try {
            const updateModel = await InventoryValidator.validateUpdateRequest(req.body)
            const inventory = await this._service.getById(req.params.id)
            if(inventory == null){
                throw new ApiError(500, "Could not find Inventory!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if(updated == null){
                throw new ApiError(500, "Could not update Inventory!")
            }
            ResponseHandler.success(req, res, "Inventory updated successfully", 201,
            {Inventory : updated})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async(req: express.Request, res: express.Response) => {
        try {
            const inventory = await this._service.getById(req.params.id)
            if(inventory == null){
                throw new ApiError(500, "Inventory does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if(deleted == null){
                throw new ApiError(500, "Inventory could not be deleted!")
            }
            ResponseHandler.success(req, res, "Inventory deleted successfully", 201, null)

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


}