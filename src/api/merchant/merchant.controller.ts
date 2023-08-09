import express from 'express'
import { MerchantService } from '../../services/merchant.service'
import { Merchant } from '../../database/models/merchant'
import { MerchantValidator } from './merchant.validator'
import { uuid } from '../../domain.types/miscellaneous/system.types'
import { ApiError } from '../../common/api.error'
import { ResponseHandler } from '../../common/response.handler'


export class MerchantController{

    private _service   : MerchantService 
    private _validator : MerchantValidator


    constructor(){
        this._service = new MerchantService();
        this._validator = new MerchantValidator();
    }


    public create = async(req: express.Request, res: express.Response) => {
        try{
            const createModel = await MerchantValidator.validateCreateRequest(req.body)
            const merchant = await this._service.create(createModel)

            if(merchant == null){
                throw new ApiError(500, "Could not create Merchant!")
            }

            ResponseHandler.success(req, res, "Merchant created successfully", 201,
            {Merchant: merchant})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public get = async(req: express.Request, res: express.Response) => {
        try {
            const merchants = await this._service.get()

            ResponseHandler.success(req, res, "Merchants fetched successfully", 201,
            {Merchants : merchants})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async(req: express.Request, res: express.Response) => {
        try {
            const merchant = await this._service.getById(req.params.id)

            if(merchant == null){
                throw new ApiError(500, "Could not find Merchant!")
            }

            ResponseHandler.success(req, res, "Merchant fetched successfully", 201,
            {Merchant : merchant})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async(req: express.Request, res: express.Response) => {
        try {
            const updateModel = await MerchantValidator.validateUpdateRequest(req.body)
            const merchant = await this._service.getById(req.params.id)
            if(merchant == null){
                throw new ApiError(500, "Could not find Merchant!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if(updated == null){
                throw new ApiError(500, "Could not update Merchant!")
            }
            ResponseHandler.success(req, res, "Merchant updated successfully", 201,
            {Merchant : updated})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async(req: express.Request, res: express.Response) => {
        try {
            const merchant = await this._service.getById(req.params.id)
            if(merchant == null){
                throw new ApiError(500, "Merchant does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if(deleted == null){
                throw new ApiError(500, "Merchant could not be deleted!")
            }
            ResponseHandler.success(req, res, "Merchant deleted successfully", 201, null)

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


}