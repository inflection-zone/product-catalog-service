import express from "express";
import { BrandService } from "../services/brand.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { BrandValidator } from "../validators/brand.validator";
import { IBrandUpdateModel } from "../domain.types/brand/brand.domain.types";

export class BrandController {
    service: BrandService = null;
    constructor() {
        this.service = new BrandService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let brand = await this.service.Search();
            if (brand === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Brand info of all";
            ResponseHandler.success(req, res, Message, 200, brand);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const brand = await this.service.SearchBrandById(id);
            console.log(brand);
            if (brand === null) {
                ErrorHandler.throwNotFoundError("Brand not found");
            }
            const Message = "Successfully received Brand info by Id";
            ResponseHandler.success(req, res, Message, 200, brand);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    create = async (req: express.Request, res: express.Response) => {
        try {
            await BrandValidator.validateCreateRequst(req.body);
            const brand = await this.service.createBrand(req);
            console.log(brand);
            if (brand === null) {
                throw new ApiError("Unable to create brand", 400);
            }
            const Message = "Successfully created Brand info";
            ResponseHandler.success(req, res, Message, 200, brand);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const isPresent = await this.service.SearchBrandById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Brand with id ${req.params.id} not found`);
            }
            await BrandValidator.validateUpdateRequst(req.body);
            const updateModel: IBrandUpdateModel = this.getUpdateModel(req.body);
            const updateBrand = await this.service.updateBrand(req);
            const Message = "Successfully updated Brand info";
            ResponseHandler.success(req, res, Message, 200, updateBrand);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.SearchBrandById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Brand with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteBrand(req);
            const Message = "Successfully deleted Brand info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
    private getUpdateModel(requestBody): IBrandUpdateModel {
        const model: IBrandUpdateModel = {
            Name: requestBody.name,
            LogoUrl: requestBody.logoUrl
        };
        return model;
    }
}

