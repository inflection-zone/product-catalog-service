import express from "express";
import { ProductDetailsService } from "../services/product.details.service";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductDetailsValidator } from "../validators/product.details.validator";
import { IProductDetailsUpdateModel } from "../domain types/productdetails/product.details.domain.entity";

export class ProductDetailsController {
    _service: ProductDetailsService;
    constructor() {
        this._service = new ProductDetailsService(); 
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productDetails = await this._service.Search(); 
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
            const productDetails = await this._service.SearchProductDetailsById(id); 
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
            const productDetails = await this._service.createProductDetails(req); 
            console.log(productDetails);
            if (productDetails === null) {
                throw new ApiError(400,"Unable to create productDetails");
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
            const isPresent = await this._service.SearchProductDetailsById(id); 
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductDetails with id ${req.params.id} not found`);
            }
            await ProductDetailsValidator.validateUpdateRequest(req.body);
            const updateModel: IProductDetailsUpdateModel = this.getUpdateModel(req.body);  
            const updateProductDetails = await this._service.updateProductDetails(req); 
            const Message = "Successfully updated ProductDetails info";
            ResponseHandler.success(req, res, Message, 200, updateProductDetails);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id; 
            const isPresent = await this._service.SearchProductDetailsById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductDetails with id ${req.params.id} not found`
                );
            }
            let response = await this._service.deleteProductDetails(req); 
            const Message = "Successfully deleted ProductDetails info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): IProductDetailsUpdateModel {
        const model: IProductDetailsUpdateModel = {
          ProductId: requestBody.ProductId.id,
          Information: requestBody.Information,
          AdditionalInformation: requestBody.AdditionalInformation,
          TechnicalDetails: requestBody.TechnicalDetails,
          PartNumber: requestBody.PartNumber,
          ModelNumber: requestBody.ModelNumber,
          CountryOfOrigin: requestBody.CountryOfOrigin,
          ItemWeight: requestBody.ItemWeight,
          ItemDimensions: requestBody.ItemDimensions,
          PackItemCount: requestBody.PackItemCount
        };
        return model;
    }
}           
    
        
         