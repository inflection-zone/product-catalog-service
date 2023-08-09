
import express from "express";
import { productService } from "../services/product.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductValidator } from "./product.validator";
import { ProductUpdateModel } from "../domain types/product/product.domain.types";

export class productController {
    service: productService = null;
    constructor() {
        this.service = new productService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let product = await this.service.getProduct();
            if (product === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Product info of all";
            ResponseHandler.success(req, res, Message, 200, product);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const product = await this.service.getProductById(id);
            console.log(product);
            if (product === null) {
                ErrorHandler.throwNotFoundError("Product not found");
            }
            const Message = "Successfully received Product info by Id";
            ResponseHandler.success(req, res, Message, 200, product);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductValidator.validateCreateRequest(req.body);
            console.log("controller");
            const product = await this.service.createProduct(req);
            console.log("product");
            if (product === null) {
                throw new ApiError("Unable to create product", 400);
            }
            const Message = "Successfully created Product info";
            ResponseHandler.success(req, res, Message, 200, product);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);

            const isPresent = await this.service.getProductById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Product with id ${req.params.id} not found`);
            }
            //await ProductValidator.validateUpdateRequest(req.body);
            const updateModel : ProductUpdateModel = this.getUpdateModel(req.body);
            const updateProduct = await this.service.updateProduct(req);
            const Message = "Successfully updated Product info";
            ResponseHandler.success(req, res, Message, 200, updateProduct);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.getProductById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Product with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProduct(req);
            const Message = "Successfully deleted Product info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): ProductUpdateModel{
        const model : ProductUpdateModel={
            name:requestBody.name,
            description : requestBody.description,
            categoryId : requestBody.categoryId,
            brandId : requestBody.brandId, 
            basePrice: requestBody.basePrice? parseInt(requestBody.basePrice):undefined,
            taxes:requestBody.taxes? parseInt(requestBody.taxes):undefined,
            manufacturerName: requestBody.manufacturerName,
            manufacturerPartNumber:requestBody.manufacturerPartNumber
        };
        return model;
     }
}