import express from "express";
import { Product } from "../database/models/product.model";
import { AppDataSource } from "../database/data.source";
import { ProductMapper } from "../database/mappers/product.mapper";


export class ProductService {
    constructor() { }
    Search = async () => {
        var repo = AppDataSource.getRepository(Product);
        var records = await repo.find({
            relations: {
                CategoryId : true,
                BrandId: true
            }
        });
        return records;
    }

    SearchById = async (id:string) => {
        var repo = AppDataSource.getRepository(Product);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
                CategoryId : true,
                BrandId: true
            }
        });
        return records;
    }

    createProduct = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(Product);
        const newProduct = repo.create(req.body)
        const createdProduct = await repo.save(newProduct)
        return createdProduct;
    }

    updateProduct = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Product);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        //Object.assign(records,req.body)
        records.Name = req.body.Name;
        records.Description = req.body.Description;
        records.CategoryId = req.body.CategoryId;
        records.BrandId = req.body.BrandId;
        records.BasePrice = parseInt(req.body.BasePrice);
        records.Taxes = parseInt(req.body.Taxes);
        records.ManufacturerName = req.body.ManufacturerName;
        records.ManufacturerPartNumber = req.body.ManufacturerPartNumber;
        const updatedProduct = await repo.save(records);
        return updatedProduct;
    }

    deleteProduct = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Product);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
                CategoryId : true,
                BrandId: true
            }
        });
        const deletedProduct = await repo.remove(records);
        return deletedProduct;
    }
}