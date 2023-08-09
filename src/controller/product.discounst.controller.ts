import express from "express";
import { productDiscountService } from "../services/product.discounts.services"; // Import the appropriate service
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { ProductDiscountValidator } from "./product.discounst.validator";
import { ProductDiscountUpdateModel } from "../domain types/productDiscount/product.discount.domain.types";
export class productDiscountsController {
    service: productDiscountService = null;
    constructor() {
        this.service = new productDiscountService(); // Instantiate the appropriate service
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let productDiscounts = await this.service.getProductDiscounts(); // Call the appropriate service method
            if (productDiscounts === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received ProductDiscounts info of all";
            ResponseHandler.success(req, res, Message, 200, productDiscounts);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const productDiscounts = await this.service.getProductDiscountById(id); // Call the appropriate service method
            console.log(productDiscounts);
            if (productDiscounts === null) {
                ErrorHandler.throwNotFoundError("ProductDiscounts not found");
            }
            const Message = "Successfully received ProductDiscounts info by Id";
            ResponseHandler.success(req, res, Message, 200, productDiscounts);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await ProductDiscountValidator.validateCreateRequest(req.body); // Use the appropriate validator
            const productDiscounts = await this.service.createProductDiscount(req); // Call the appropriate service method
            console.log(productDiscounts);
            if (productDiscounts === null) {
                throw new ApiError("Unable to create productDiscounts", 400);
            }
            const Message = "Successfully created ProductDiscounts info";
            ResponseHandler.success(req, res, Message, 200, productDiscounts);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id;
            const isPresent = await this.service.getProductDiscountById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`ProductDiscounts with id ${req.params.id} not found`);
            }
            await ProductDiscountValidator.validateUpdateRequest(req.body);
            const updateModel: ProductDiscountUpdateModel = this.getUpdateModel(req.body);
            const updateProductDiscounts = await this.service.updateProductDiscount(req);
            const Message = "Successfully updated ProductDiscounts info";
            ResponseHandler.success(req, res, Message, 200, updateProductDiscounts);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id;
            const isPresent = await this.service.getProductDiscountById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `ProductDiscounts with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteProductDiscount(req);
            const Message = "Successfully deleted ProductDiscounts info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): ProductDiscountUpdateModel {
        const model: ProductDiscountUpdateModel = {
            productId: requestBody.productId,
            merchantId: requestBody.merchantId,
            discountType: requestBody.discountType,
            discount: requestBody.discount,
            discountForVolume: requestBody.discountForVolume
        };
        return model;
    }
}
