import express from "express";
import { customerReviewService } from "../services/customer.review.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { CustomerReviewValidator } from "./customer.review.validator"; 
import { CustomerReviewUpdateModel } from "../domain types/customerReview/customer.review.domain.types"; // Import the appropriate domain types

export class customerReviewController {
    service: customerReviewService = null;
    constructor() {
        this.service = new customerReviewService(); 
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let customerReview = await this.service.getCustomerReviews(); // Call the appropriate service method
            if (customerReview === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received CustomerReview info of all";
            ResponseHandler.success(req, res, Message, 200, customerReview);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const customerReview = await this.service.getCustomerReviewById(id); // Call the appropriate service method
            console.log(customerReview);
            if (customerReview === null) {
                ErrorHandler.throwNotFoundError("CustomerReview not found");
            }
            const Message = "Successfully received CustomerReview info by Id";
            ResponseHandler.success(req, res, Message, 200, customerReview);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await CustomerReviewValidator.validateCreateRequest(req.body); // Use the appropriate validator
            const customerReview = await this.service.createCustomerReview(req); // Call the appropriate service method
            console.log(customerReview);
            if (customerReview === null) {
                throw new ApiError("Unable to create customerReview", 400);
            }
            const Message = "Successfully created CustomerReview info";
            ResponseHandler.success(req, res, Message, 200, customerReview);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id; // Remove unnecessary parentheses
            const isPresent = await this.service.getCustomerReviewById(id); // Call the appropriate service method
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`CustomerReview with id ${req.params.id} not found`);
            }
            await CustomerReviewValidator.validateUpdateRequest(req.body); // Use the appropriate validator
            const updateModel: CustomerReviewUpdateModel = this.getUpdateModel(req.body); // Use the appropriate domain types
            const updateCustomerReview = await this.service.updateCustomerReview(req); // Call the appropriate service method
            const Message = "Successfully updated CustomerReview info";
            ResponseHandler.success(req, res, Message, 200, updateCustomerReview);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id; // Remove unnecessary parentheses
            const isPresent = await this.service.getCustomerReviewById(id); // Call the appropriate service method
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `CustomerReview with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteCustomerReview(req); // Call the appropriate service method
            const Message = "Successfully deleted CustomerReview info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): CustomerReviewUpdateModel {
        const model: CustomerReviewUpdateModel = {
                productId: requestBody.productId,
                customerId: requestBody.customerId,
                verifiedPurchase: requestBody.verifiedPurchase,
                rating: requestBody.rating,
                title: requestBody.title,
                description: requestBody.description,
                foundUsefulCount: requestBody.foundUsefulCount
        };
        return model;
    }
}
