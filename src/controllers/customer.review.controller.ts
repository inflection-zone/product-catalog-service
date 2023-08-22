import express, { response } from "express";
import {CustomerReviewMapper} from '../database/mappers/customer.review.mapper'
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { CustomerReviewService } from "../services/customer.review.service";
import { CustomerReviewValidator } from '../validators/customer.review.validator'


export class CustomerReviewController {

    private _service: CustomerReviewService
    private _validator: CustomerReviewValidator


    constructor() {
        this._service = new CustomerReviewService();
        this._validator = new CustomerReviewValidator();
    }


    public create = async (req: express.Request, res: express.Response) => {
        try {
            const createModel = await CustomerReviewValidator.validateCreateRequest(req.body)
            const CustomerReview = await this._service.create(createModel)

            if (CustomerReview == null) {
                throw new ApiError(500, "Could not create CustomerReview!")
            }

            ResponseHandler.success(req, res, "CustomerReview created successfully", 201,
                { CustomerReview: CustomerReview })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }

    public login = async (req: express.Request, res: express.Response) => {
        try {
            const token = await this._service.login(req)
            if(token == null){
                throw new ApiError(500, "Authentication failed")
            }
            ResponseHandler.success(req, res, "Logged in successfully", 201, 
            {Token : token})
        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }

    
    public get = async (req: express.Request, res: express.Response) => {
        try {
            const CustomerReviews = await this._service.get()

            ResponseHandler.success(req, res, "CustomerReviews fetched successfully", 201,
                { CustomerReviews: CustomerReviews })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }



    public getById = async (req: express.Request, res: express.Response) => {
        try {
            const customerReview = await this._service.getById(req.params.id)

            if (customerReview == null) {
                throw new ApiError(500, "Could not find CustomerReview!")
            }

            ResponseHandler.success(req, res, "CustomerReview fetched successfully", 201,
                { CustomerReview: customerReview })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public update = async (req: express.Request, res: express.Response) => {
        try {
            const updateModel = await CustomerReviewValidator.validateUpdateRequest(req.body)
            const customerReview = await this._service.getById(req.params.id)
            if (customerReview == null) {
                throw new ApiError(500, "Could not find CustomerReview!")
            }
            const updated = await this._service.update(req.params.id, updateModel)
            if (updated == null) {
                throw new ApiError(500, "Could not update CustomerReview!")
            }
            ResponseHandler.success(req, res, "CustomerReview updated successfully", 201,
                { CustomerReview: updated })

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


    public delete = async (req: express.Request, res: express.Response) => {
        try {
            const customerReview = await this._service.getById(req.params.id)
            if (customerReview == null) {
                throw new ApiError(500, "CustomerReview does not exist!")
            }

            const deleted = await this._service.delete(req.params.id)
            if (deleted == null) {
                throw new ApiError(500, "CustomerReview could not be deleted!")
            }
            ResponseHandler.success(req, res, "CustomerReview deleted successfully", 201, null)

        } catch (error) {
            ResponseHandler.HandleError(req, res, error)
        }
    }


}