import express from "express";
import { categoryService } from "../services/category.services";
import { ResponseHandler } from "../common/response.handler";
import { ApiError } from "../common/api.error";
import { ErrorHandler } from "../common/error.handler";
import { CategoryValidator } from "./category.validator";

export class categoryController {
    service: categoryService = null;
    constructor() {
        this.service = new categoryService();
    }

    get = async (req: express.Request, res: express.Response) => {
        try {
            let category = await this.service.getCategory();
            if (category === null) {
                ErrorHandler.throwNotFoundError("No record found");
            }

            const Message = "Successfully received Category info of all";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    getById = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);
            const category = await this.service.getCategoryById(id);
            console.log(category);
            if (category === null) {
                ErrorHandler.throwNotFoundError("Category not found");
            }
            const Message = "Successfully received Category info by Id";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    create = async (req: express.Request, res: express.Response) => {
        try {
            await CategoryValidator.validateCreateRequest(req.body);
            const category = await this.service.createCategory(req);
            console.log(category);
            if (category === null) {
                throw new ApiError("Unable to create category", 400);
            }
            const Message = "Successfully created Category info";
            ResponseHandler.success(req, res, Message, 200, category);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    update = async (req: express.Request, res: express.Response) => {
        try {
            let id: string = (req.params.id);

            const isPresent = await this.service.getCategoryById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(`Category with id ${req.params.id} not found`);
            }
            await CategoryValidator.validateUpdateRequest(req.body);
            const updateCategory = await this.service.updateCategory(req);
            const Message = "Successfully updated Category info";
            ResponseHandler.success(req, res, Message, 200, updateCategory);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };

    del = async (req: express.Request, res: express.Response) => {
        try {
            const id: string = (req.params.id);
            const isPresent = await this.service.getCategoryById(id);
            if (isPresent === null) {
                ErrorHandler.throwNotFoundError(
                    `Category with id ${req.params.id} not found`
                );
            }
            let response = await this.service.deleteCategory(req);
            const Message = "Successfully deleted Category info";
            ResponseHandler.success(req, res, Message, 200, response);
        } catch (error: any) {
            ResponseHandler.handleError(req, res, error);
        }
    };
}