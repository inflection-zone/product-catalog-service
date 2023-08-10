import express from "express";
import { productDetailsService } from "../services/product.details.services"; 
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductDetailsValidator } from "../validators/product.details.validator";  
import { ProductDetailsUpdateModel } from "../domain types/productDetails/product.details.domain.types";

export class productDetailsController {
    service: productDetailsService = null;
    constructor() {
        this.service = new productDetailsService(); 
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productDetails = await this.service.getProductDetails(); 
            if (productDetails === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductDetails info of all";
            ResponseHandler.success(req, res, Message, 200, productDetails);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; 
            const productDetails = await this.service.getByIdProductDetails(id); 
            console.log(productDetails);
            if (productDetails === null) {
                ErrorHandler.throwNotFoundError("ProductDetails not found");
            }
            const Message = "Successfully received ProductDetails info by Id";
            ResponseHandler.success(req, res, Message, 200, productDetails);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductDetailsValidator.validateCreateRequest(req.body); 
            const productDetails = await this.service.createProductDetails(req); 
            console.log(productDetails);
            if (productDetails === null) {
                throw new ApiError("Unable to create productDetails", 400);
            }
            const Message = "Successfully created ProductDetails info";
            ResponseHandler.success(req, res, Message, 200, productDetails);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; 
            const isPresent = await this.service.getByIdProductDetails(id); 
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductDetails with id ${req.params.id} not found`);
            }
            await ProductDetailsValidator.validateUpdateRequest(req.body);
            const updateModel: ProductDetailsUpdateModel = this.getUpdateModel(req.body);  
            const updateProductDetails = await this.service.updateProductDetails(req); 
            const Message = "Successfully updated ProductDetails info";
            ResponseHandler.success(req, res, Message, 200, updateProductDetails);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id; 
            const isPresent = await this.service.getByIdProductDetails(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductDetails with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductDetails(req); 
            const Message = "Successfully deleted ProductDetails info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): ProductDetailsUpdateModel {
        const model: ProductDetailsUpdateModel = {
            productId: requestBody.productId,
            information: requestBody.information,
            additionalInformation: requestBody.additionalInformation,
            technicalDetails: requestBody.technicalDetails,
            partNumber: requestBody.partNumber,
            modelNumber: requestBody.modelNumber,
            countryOfOrigin: requestBody.countryOfOrigin,
            itemWeight: requestBody.itemWeight,
            itemDimensions: requestBody.itemDimensions,
            packItemCount: requestBody.packItemCount

        };
        return model;
    }
}
