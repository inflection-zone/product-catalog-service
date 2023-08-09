import express from "express";
import { featureService } from "../services/feature.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { FeatureValidator } from "./feature.validator";
import { FeatureUpdateModel } from "../domain types/feature/feature.domain.types";

export class featureController {
    service: featureService = null;
    constructor() {
        this.service = new featureService();

    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let feature = await this.service.getFeature();
            if (feature === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Feature info of all";
            ResponseHandler.success(req, res, Message, 200, feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = req.params.id;

            const feature = await this.service.getByIdFeature(id);
            console.log(feature);
            if (feature === null) {
                ErrorHandler.throwNotFoundError("Feature not found");
            }
            const Message = "Successfully received Feature info by Id";
            ResponseHandler.success(req, res, Message, 200, feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await FeatureValidator.validateCreateRequest(req.body);
            const feature = await this.service.createFeature(req);
            console.log(feature);
            if (feature === null) {
                throw new ApiError("Unable to create feature", 400);
            }
            const Message = "Successfully created Feature info";
            ResponseHandler.success(req, res, Message, 200, feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

   
    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const isPresent = await this.service.getByIdFeature(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Category with id ${req.params.id} not found`);
            }
            await FeatureValidator.validateUpdateRequest(req.body);
            const updateModel : FeatureUpdateModel= this.getUpdateModel(req.body);
            const updateCategory = await this.service.updateFeature(req);
            const Message = "Successfully updated Category info";
            ResponseHandler.success(req, res, Message, 200, updateCategory);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = req.params.id;
            const isPresent = await this.service.getByIdFeature(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Feature with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteFeature(req);
            const Message = "Successfully deleted Feature info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): FeatureUpdateModel {
        const model: FeatureUpdateModel = {
            name: requestBody.name,
            description:requestBody.description,
            imageUrl:requestBody.imageUrl
        };
        return model;
    }
}