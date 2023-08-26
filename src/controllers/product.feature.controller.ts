import express from "express";
import { ProductFeatureService } from ".../services/product.feature.service; 
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductFeatureValidator } from "../validators/product.feature.validator"; 
import { IProductFeatureUpdateModel } from "../domain.types/product.feature/product.feature.domain.entity";

export class ProductFeatureController {
    service: ProductFeatureService;
    constructor() {
        this.service = new ProductFeatureService(); 
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productFeature = await this.service.Search(); 
            if (productFeature === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductFeature info of all";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; 
            const productFeature = await this.service.SearchProductFeatureById(id); 
            console.log(productFeature);
            if (productFeature === null) {
                ErrorHandler.throwNotFoundError("ProductFeature not found");
            }
            const Message = "Successfully received ProductFeature info by Id";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductFeatureValidator.validateCreateRequest(req.body); 
            const productFeature = await this.service.createProductFeature(req);  
            console.log(productFeature);
            if (productFeature === null) {
                throw new ApiError(400, "Unable to create productFeature");
            }
            const Message = "Successfully created ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; 
            const isPresent = await this.service.SearchProductFeatureById(id); 
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductFeature with id ${req.params.id} not found`);
            }
            await ProductFeatureValidator.validateUpdateRequest(req.body); 
            const updateModel: IProductFeatureUpdateModel = this.getUpdateModel(req.body); 
            const updateProductFeature = await this.service.updateProductFeature(req); 
            const Message = "Successfully updated ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, updateProductFeature);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id; 
            const isPresent = await this.service.SearchProductFeatureById(id);  
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductFeature with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductFeature(req); 
            const Message = "Successfully deleted ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): IProductFeatureUpdateModel {
        const model: IProductFeatureUpdateModel = {
            productId: requestBody.productId,
            featureId: requestBody.featureId
        };
        return model;
    }
}