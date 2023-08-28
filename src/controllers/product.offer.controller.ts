import express from "express";
import { ProductOfferService } from "../services/product.offer.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductOfferValidator } from "../validators/product.offer.validator";
import { IProductOfferUpdateModel } from "../domain.types/product.offer/product.offer.types";

export class ProductOfferController {
    service: ProductOfferService = null;
    constructor() {
        this.service = new ProductOfferService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productOffer = await this.service.Search();
            if (productOffer === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductOffer info of all";
            ResponseHandler.success(req, res, Message, 200, productOffer);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const productOffer = await this.service.SearchOfferById(id);
            console.log(productOffer);
            if (productOffer === null) {
                ErrorHandler.throwNotFoundError("ProductOffer not found");
            }
            const Message = "Successfully received ProductOffer info by Id";
            ResponseHandler.success(req, res, Message, 200, productOffer);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductOfferValidator.validateCreateRequest(req.body);
            const productOffer = await this.service.createProductOffer(req);
            console.log(productOffer);
            if (productOffer === null) {
                throw new ApiError( 400,"Unable to create productOffer");
            }
            const Message = "Successfully created ProductOffer info";
            ResponseHandler.success(req, res, Message, 200, productOffer);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const isPresent = await this.service.SearchOfferById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductOffer with id ${req.params.id} not found`);
            }
            await ProductOfferValidator.validateUpdateRequest(req.body);
           const updateModel : IProductOfferUpdateModel = this.getUpdateModel(req.body);
            const updateProductOffer = await this.service.updateProductOffer(req);
            const Message = "Successfully updated ProductOffer info";
            ResponseHandler.success(req, res, Message, 200, updateProductOffer);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.SearchOfferById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductOffer with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductOffer(req);
            const Message = "Successfully deleted ProductOffer info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): IProductOfferUpdateModel{
        const model : IProductOfferUpdateModel={
            Title: requestBody.Title,
            Details: requestBody.Details,
            ProductId : requestBody.ProductId
        };
        return model;
     }
}