import express from 'express'
import { CustomerService } from '../services/customer.service'
import { Customer } from '../database/models/customer'
import { CustomerValidator } from '../validators/customer.validator'
import { uuid } from '../domain.types/miscellaneous/system.types'
import { ApiError } from '../common/api.error'
import { ResponseHandler } from '../common/response.handler'


export class CustomerController{

    private _service   : CustomerService 
    private _validator : CustomerValidator


    constructor(){
        this._service = new CustomerService();
        this._validator = new CustomerValidator();
    }


    public create = async(req: express.Request, res: express.Response) => {
        try{
            const createModel = await CustomerValidator.validateCreateRequest(req.body)
            const customer = await this._service.create(createModel)

            if(customer == null){
                throw new ApiError(500, "Could not create customer!")
            }

            ResponseHandler.success(req, res, "Customer created successfully", 201,
            {Customer : customer})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public get = async(req: express.Request, res: express.Response) => {
        try {
            const customers = await this._service.get()

            ResponseHandler.success(req, res, "Customers fetched successfully", 201,
            {Customers : customers})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async(req: express.Request, res: express.Response) => {
        try {
            const customer = await this._service.getById(req.params.id)

            if(customer == null){
                throw new ApiError(500, "Could not find customer!")
            }

            ResponseHandler.success(req, res, "Customer fetched successfully", 201,
            {Customer : customer})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async(req: express.Request, res: express.Response) => {
        try {
            const updateModel = await CustomerValidator.validateUpdateRequest(req.body)
            const customer = await this._service.getById(req.params.id)
            if(customer == null){
                throw new ApiError(500, "Could not find customer!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if(updated == null){
                throw new ApiError(500, "Could not update customer!")
            }
            ResponseHandler.success(req, res, "Customer updated successfully", 201,
            {Customer : updated})

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async(req: express.Request, res: express.Response) => {
        try {
            const customer = await this._service.getById(req.params.id)
            if(customer == null){
                throw new ApiError(500, "Customer does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if(deleted == null){
                throw new ApiError(500, "Customer could not be deleted!")
            }
            ResponseHandler.success(req, res, "Customer deleted successfully", 201, null)

        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }


}