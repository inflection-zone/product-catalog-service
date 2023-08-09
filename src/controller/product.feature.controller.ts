import express from "express";
import { productFeatureService } from "../services/product.feature.services"; // Import the appropriate service
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductFeatureValidator } from "./product.feature.validator"; // Import the appropriate validator
import { ProductFeatureUpdateModel } from "../domain types/productFeature/product.feature.domain.types"; // Import the appropriate domain types

export class productFeatureController {
    service: productFeatureService = null;
    constructor() {
        this.service = new productFeatureService(); // Instantiate the appropriate service
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productFeature = await this.service.getProductFeature(); // Call the appropriate service method
            if (productFeature === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductFeature info of all";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const productFeature = await this.service.getByIdProductFeature(id); // Call the appropriate service method
            console.log(productFeature);
            if (productFeature === null) {
                ErrorHandler.throwNotFoundError("ProductFeature not found");
            }
            const Message = "Successfully received ProductFeature info by Id";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductFeatureValidator.validateCreateRequest(req.body); // Use the appropriate validator
            const productFeature = await this.service.createProductFeature(req); // Call the appropriate service method
            console.log(productFeature);
            if (productFeature === null) {
                throw new ApiError("Unable to create productFeature", 400);
            }
            const Message = "Successfully created ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, productFeature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const isPresent = await this.service.getByIdProductFeature(id); // Call the appropriate service method
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductFeature with id ${req.params.id} not found`);
            }
            await ProductFeatureValidator.validateUpdateRequest(req.body); // Use the appropriate validator
            const updateModel: ProductFeatureUpdateModel = this.getUpdateModel(req.body); // Use the appropriate domain types
            const updateProductFeature = await this.service.updateProductFeature(req); // Call the appropriate service method
            const Message = "Successfully updated ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, updateProductFeature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id; // Remove unnecessary parentheses
            const isPresent = await this.service.getByIdProductFeature(id); // Call the appropriate service method
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductFeature with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductFeature(req); // Call the appropriate service method
            const Message = "Successfully deleted ProductFeature info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): ProductFeatureUpdateModel {
        const model: ProductFeatureUpdateModel = {
            productId: requestBody.productId,
            featureId: requestBody.featureId
        };
        return model;
    }
}
