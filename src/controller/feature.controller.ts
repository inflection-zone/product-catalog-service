import express from "express";
import { FeatureService } from "../services/feature.service";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { Feature } from "../database/models/feature.model";
import { FeatureValidator } from "../validators/feature.validator";
import { IFeatureUpdateModel } from "../domain types/feature/feature.domain.type";

export class FeatureController {
    service: FeatureService = null;
    constructor() {
        this.service = new FeatureService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let Feature = await this.service.Search();
            if (Feature === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Feature info of all";
            ResponseHandler.success(req, res, Message, 200, Feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const Feature = await this.service.SearchFeatureById(id);
            console.log(Feature);
            if (Feature === null) {
                ErrorHandler.throwNotFoundError("Feature not found");
            }
            const Message = "Successfully received Feature info by Id";
            ResponseHandler.success(req, res, Message, 200, Feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
             await FeatureValidator.validateCreateRequest(req.body);
            const brand = await this.service.createFeature(req);
            console.log(Feature);
            if (brand === null) {
                throw new ApiError("Unable to create Feature", 400);
            }
            const Message = "Successfully created Feature info";
            ResponseHandler.success(req, res, Message, 200, Feature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const isPresent = await this.service.SearchFeatureById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Feature with id ${req.params.id} not found`);
            }
            await FeatureValidator.validateUpdateRequest(req.body);
            const updateModel: IFeatureUpdateModel = this.getUpdateModel(req.body);
            const updateFeature = await this.service.updateFeature(req);
            const Message = "Successfully updated feature info";
            ResponseHandler.success(req, res, Message, 200, updateFeature);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.SearchFeatureById(id);
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
    private getUpdateModel(requestBody): IFeatureUpdateModel {
      const model: IFeatureUpdateModel = {
          Name: requestBody.name,
          Description:requestBody.description,
          ImageUrl:requestBody.imageUrl
      };
      return model;
  }
}