import express from "express";
import { Category } from "../database/models/category.model";
import { AppDataSource } from "../database/data.source";
import { CategoryMapper } from "../database/mappers/category.mapper";
import { ApiError } from "../common/api.error";

export class CategoryService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(Category);
        var records = await repo.find({
            relations: {
                ParentCategoryId : true,
            }
        });
        return records;
    }

    SearchCategoryById = async (id:string) => {
        var repo = AppDataSource.getRepository(Category);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
                ParentCategoryId : true
            }
        });
        return records;
    }

    createCategory = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(Category);
        const newCategory = repo.create(req.body)
        const createdProduct = await repo.save(newCategory)
        return createdProduct;
    }

    updateCategory = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Category);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        records.Name = req.body.Name;
        records.Description = req.body.Description;
        records.ParentCategoryId = req.body.ParentCategoryId;
        const updatedProduct = await repo.save(records);
        return updatedProduct;
    }
    
    deleteCategory = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Category);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
                ParentCategoryId : true
            }
        });
        const deletedProduct = await repo.remove(records);
        return deletedProduct;
    }
}