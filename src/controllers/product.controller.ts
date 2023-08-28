
import express from "express";
import { ProductService } from "../services/product.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductValidator } from "../validators/product.validator";
import { IProductUpdateModel } from "../domain.types/product/product.domain.types";

export class ProductController {
    service: ProductService = null;
    constructor() {
        this.service = new ProductService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let products = await this.service.Search();
            if (products === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Product info of all";
            ResponseHandler.success(req, res, Message, 200, products);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id;
            const product = await this.service.SearchById(id);
            console.log(product);
            if (product === null) {
                ErrorHandler.throwNotFoundError("Product not found");
            }
            const Message = "Successfully received Product info by Id";
            ResponseHandler.success(req, res, Message, 200, product);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductValidator.validateCreateRequest(req.body);
            console.log("controller");
            const product = await this.service.createProduct(req);
            console.log("product");
            if (product === null) {
                throw new ApiError( 400,"Unable to create product");
            }
            const Message = "Successfully created Product info";
            ResponseHandler.success(req, res, Message, 200, product);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.body.id);
            const isPresent = await this.service.SearchById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Product with id ${req.body.id} not found`);
            }
            
            await ProductValidator.validateUpdateRequest(req.body);
            const updateModel : IProductUpdateModel = this.getUpdateModel(req.body);
            const updateProduct = await this.service.updateProduct(req);
            const Message = "Successfully updated Product info";
            ResponseHandler.success(req, res, Message, 200, updateProduct);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.body.id);
            const isPresent = await this.service.SearchById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Product with id ${req.body.id} not found`
                );
            }
            let response = await this.service.deleteProduct(req);
            const Message = "Successfully deleted Product info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): IProductUpdateModel{
        const model : IProductUpdateModel={
            Name:requestBody.Name,
            Description : requestBody.Description,
            CategoryId : requestBody.CategoryId,
            BrandId : requestBody.BrandId, 
            BasePrice: requestBody.BasePrice? parseInt(requestBody.BasePrice):undefined,
            Taxes:requestBody.Taxes? parseInt(requestBody.Taxes):undefined,
            ManufacturerName: requestBody.ManufacturerName,
            ManufacturerPartNumber:requestBody.ManufacturerPartNumber
        };
        return model;
     }
}