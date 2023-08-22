import express from "express";
import { ProductDiscount } from "../database/models/product.discount"; 
import { ProductDiscountMapper } from "../database/mappers/product.discount.mapper"; 
import {ResponseHandler} from '../common/response.handler'
import { ApiError } from "../common/api.error";
import { ProductDiscountService } from "../services/product.discount.service";
import { ProductDiscountValidator } from '../validators/product.discount.validator'

export class ProductDiscountController {

    private _service: ProductDiscountService
    private _validator: ProductDiscountValidator


    constructor() {
        this._service = new ProductDiscountService();
        this._validator = new ProductDiscountValidator();
    }


    public create = async (req: express.Request, res: express.Response) => {
        try {
            const createModel = await ProductDiscountValidator.validateCreateRequest(req.body)
            const ProductDiscount = await this._service.create(createModel)

            if (ProductDiscount == null) {
                throw new ApiError(500, "Could not create ProductDiscount!")
            }

            ResponseHandler.success(req, res, "ProductDiscount created successfully", 201,
                { ProductDiscount: ProductDiscount })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }

    public login = async (req: express.Request, res: express.Response) => {
        try {
            const token = await this._service.login(req)
            if(token == null){
                throw new ApiError(500, "Authentication failed")
            }
            ResponseHandler.success(req, res, "Logged in successfully", 201, 
            {Token : token})
        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }

    
    public get = async (req: express.Request, res: express.Response) => {
        try {
            const productDiscounts = await this._service.get()

            ResponseHandler.success(req, res, "ProductDiscounts fetched successfully", 201,
                { ProductDiscounts: productDiscounts })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async (req: express.Request, res: express.Response) => {
        try {
            const productDiscount = await this._service.getById(req.params.id)

            if (productDiscount == null) {
                throw new ApiError(500, "Could not find ProductDiscount!")
            }

            ResponseHandler.success(req, res, "ProductDiscount fetched successfully", 201,
                { ProductDiscount: productDiscount })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async (req: express.Request, res: express.Response) => {
        try {
            const updateModel = await ProductDiscountValidator.validateUpdateRequest(req.body)
            const productDiscount = await this._service.getById(req.params.id)
            if (productDiscount == null) {
                throw new ApiError(500, "Could not find ProductDiscount!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if (updated == null) {
                throw new ApiError(500, "Could not update ProductDiscount!")
            }
            ResponseHandler.success(req, res, "ProductDiscount updated successfully", 201,
                { ProductDiscount: updated })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async (req: express.Request, res: express.Response) => {
        try {
            const productDiscount = await this._service.getById(req.params.id)
            if (productDiscount == null) {
                throw new ApiError(500, "ProductDiscount does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if (deleted == null) {
                throw new ApiError(500, "ProductDiscount could not be deleted!")
            }
            ResponseHandler.success(req, res, "ProductDiscount deleted successfully", 201, null)

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


}