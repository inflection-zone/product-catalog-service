import express from "express";
import { Category } from "../database/models/category.model";
import { AppDataSource } from "../database/data.source";
import { CategoryMapper } from "../database/mappers/category.mapper";

export class categoryService {
    constructor() { }

    getCategory = async () => {
        const response = await AppDataSource.manager.find(Category);
        return response;
    }

    getCategoryById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(Category, {
            where: {
                id: id
            }
        });
        return CategoryMapper.toDto(response);
    }

    createCategory = async (req: express.Request) => {
        const category = new Category();
        category.name = req.body.name;
        category.description = req.body.description;
        category.parentCategoryId = req.body.parentCategoryId;
        const response = await AppDataSource.manager.save(category);
        return CategoryMapper.toDto(response);
    }

    updateCategory = async (req: express.Request) => {
        const id = req.params.id;
        const category = await AppDataSource.manager.findOne(Category, {
            where: {
                id: id
            }
        });
        category.name = req.body.name;
        category.description = req.body.description;
        category.parentCategoryId = req.body.parentCategoryId;
        const response = await AppDataSource.manager.save(category);
        return CategoryMapper.toDto(response);
    }

    deleteCategory = async (req: express.Request) => {
        const id = req.params.id;
        const category = await AppDataSource.manager.findOne(Category, {
            where: {
                id: id
            }
        });
        const response = await AppDataSource.manager.remove(category);
        return CategoryMapper.toDto(response);
    }
}