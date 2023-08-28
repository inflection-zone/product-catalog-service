import express from "express";
import { CategoryService } from "../services/category.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { CategoryValidator } from "../validators/category.validator";
import { ICategoryUpdateModel } from "../domain.types/category/category.domain.types";

export class CategoryController {
    service: CategoryService = null;
    constructor() {
        this.service = new CategoryService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let category = await this.service.Search();
            if (category === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Category info of all";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const category = await this.service.SearchCategoryById(id);
            console.log(category);
            if (category === null) {
                ErrorHandler.throwNotFoundError("Category not found");
            }
            const Message = "Successfully received Category info by Id";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    create = async (req: express.Request, res: express.Response) => {
        try {
            await CategoryValidator.validateCreateRequest(req.body);
            const category = await this.service.createCategory(req);
            console.log(category);
            if (category === null) {
                throw new ApiError( 400,"Unable to create category");
            }
            const Message = "Successfully created Category info";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const isPresent = await this.service.SearchCategoryById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Category with id ${req.params.id} not found`);
            }
            await CategoryValidator.validateUpdateRequest(req.body);
            const updateModel : ICategoryUpdateModel = this.getUpdateModel(req.body);
            const updateCategory = await this.service.updateCategory(req);
            const Message = "Successfully updated Category info";
            ResponseHandler.success(req, res, Message, 200, updateCategory);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.SearchCategoryById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Category with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteCategory(req);
            const Message = "Successfully deleted Category info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.HandleError(req, res, error);
        }
    };
       private getUpdateModel(requestBody): ICategoryUpdateModel{
        const model : ICategoryUpdateModel={
            Name:requestBody.Name,
            Description : requestBody.Description,
            ParentCategoryId : requestBody.ParentCategoryId 
        };
        return model;
     }
}