import express from "express";
import { ProductImage } from "../database/models/product.image"; 
import { ProductImageMapper } from "../database/mappers/product.image.mapper";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ProductImageService } from "../services/product.image.service";
import { ProductImageValidator } from '../validators/product.image.validator'

export class ProductImageController {

    private _service: ProductImageService
    private _validator: ProductImageValidator


    constructor() {
        this._service = new ProductImageService();
        this._validator = new ProductImageValidator();
    }


    public create = async (req: express.Request, res: express.Response) => {
        try {
            const createModel = await ProductImageValidator.validateCreateRequest(req.body)
            const ProductImage = await this._service.create(createModel)

            if (ProductImage == null) {
                throw new ApiError(500, "Could not create ProductImage!")
            }

            ResponseHandler.success(req, res, "ProductImage created successfully", 201,
                { ProductImage: ProductImage })

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
            const ProductImages = await this._service.get()

            ResponseHandler.success(req, res, "ProductImages fetched successfully", 201,
                { ProductImages: ProductImages })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async (req: express.Request, res: express.Response) => {
        try {
            const ProductImage = await this._service.getById(req.params.id)

            if (ProductImage == null) {
                throw new ApiError(500, "Could not find ProductImage!")
            }

            ResponseHandler.success(req, res, "ProductImage fetched successfully", 201,
                { ProductImage: ProductImage })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async (req: express.Request, res: express.Response) => {
        try {
            const updateModel = await ProductImageValidator.validateUpdateRequest(req.body)
            const productImage = await this._service.getById(req.params.id)
            if (productImage == null) {
                throw new ApiError(500, "Could not find ProductImage!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if (updated == null) {
                throw new ApiError(500, "Could not update ProductImage!")
            }
            ResponseHandler.success(req, res, "ProductImage updated successfully", 201,
                { ProductImage: updated })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async (req: express.Request, res: express.Response) => {
        try {
            const productImage = await this._service.getById(req.params.id)
            if (productImage == null) {
                throw new ApiError(500, "ProductImage does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if (deleted == null) {
                throw new ApiError(500, "ProductImage could not be deleted!")
            }
            ResponseHandler.success(req, res, "ProductImage deleted successfully", 201, null)

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


}