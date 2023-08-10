import express from "express";
import { productImageService } from "../services/product.images.services"; // Import the appropriate service
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductImageValidator } from "../validators/product.images.validator";  
import { ProductImageUpdateModel } from "../domain types/productImage/product.image.domain.types";
export class productImagesController {
    service: productImageService = null;
    constructor() {
        this.service = new productImageService(); // Instantiate the appropriate service
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productImages = await this.service.getProductImages(); // Call the appropriate service method
            if (productImages === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductImages info of all";
            ResponseHandler.success(req, res, Message, 200, productImages);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; 
            const productImages = await this.service.getProductImageById(id); 
            console.log(productImages);
            if (productImages === null) {
                ErrorHandler.throwNotFoundError("ProductImages not found");
            }
            const Message = "Successfully received ProductImages info by Id";
            ResponseHandler.success(req, res, Message, 200, productImages);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductImageValidator.validateCreateRequest(req.body); // Use the appropriate validator
            const productImages = await this.service.createProductImage(req); // Call the appropriate service method
            console.log(productImages);
            if (productImages === null) {
                throw new ApiError("Unable to create productImages", 400);
            }
            const Message = "Successfully created ProductImages info";
            ResponseHandler.success(req, res, Message, 200, productImages);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const isPresent = await this.service.getProductImageById(id); // Call the appropriate service method
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductImages with id ${req.params.id} not found`);
            }
            await ProductImageValidator.validateUpdateRequest(req.body); // Use the appropriate validator
            const updateModel: ProductImageUpdateModel = this.getUpdateModel(req.body); // Use the appropriate domain types
            const updateProductImages = await this.service.updateProductImage(req); // Call the appropriate service method
            const Message = "Successfully updated ProductImages info";
            ResponseHandler.success(req, res, Message, 200, updateProductImages);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id;
            const isPresent = await this.service.getProductImageById(id); 
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductImages with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductImage(req); // Call the appropriate service method
            const Message = "Successfully deleted ProductImages info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): ProductImageUpdateModel {
        const model: ProductImageUpdateModel = {
            productId: requestBody.productId,
            imageUrl: requestBody.imageUrl
        };
        return model;
    }
}
