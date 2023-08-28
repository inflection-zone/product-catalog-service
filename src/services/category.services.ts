import express from "express";
import { Category } from "../database/models/category.model";
import { Source } from "../database/database.connector.typeorm";
import { CategoryMapper } from "../database/mappers/category.mapper";
import { ApiError } from "../common/api.error";

export class CategoryService {
    private _repo = Source.getRepository(Category)

    Search = async () => {
        var records = await this._repo.find({
            relations: {
                ParentCategoryId : true,
            }
        });
        return records;
    }

    SearchCategoryById = async (id:string) => {
        var records = await this._repo.find({
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
        const newCategory = this._repo.create(req.body)
        const createdProduct = await this._repo.save(newCategory)
        return createdProduct;
    }

    updateCategory = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.findOne({
            where:{
                id:id
            }
        })
        records.Name = req.body.Name;
        records.Description = req.body.Description;
        records.ParentCategoryId = req.body.ParentCategoryId;
        const updatedProduct = await this._repo.save(records);
        return updatedProduct;
    }
    
    deleteCategory = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.find({
            where : {
                    id: id
            },
            relations: {
                ParentCategoryId : true
            }
        });
        const deletedProduct = await this._repo.remove(records);
        return deletedProduct;
    }
}