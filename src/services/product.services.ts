import express from "express";
import { Product } from "../database/models/product.model";
import { ProductMapper } from "../database/mappers/product.mapper";
import { Source } from "../database/database.connector.typeorm";


export class ProductService {
    private _repo = Source.getRepository(Product)

    Search = async () => {
        var records = await this._repo.find({
            relations: {
                CategoryId : true,
                BrandId: true
            }
        });
        return records;
    }

    SearchById = async (id:string) => {
        var records = await this._repo.find({
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
        const newProduct = this._repo.create(req.body)
        const createdProduct = await this._repo.save(newProduct)
        return createdProduct;
    }

    updateProduct = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.findOne({
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
        const updatedProduct = await this._repo.save(records);
        return updatedProduct;
    }

    deleteProduct = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.find({
            where : {
                    id: id
            },
            relations: {
                CategoryId : true,
                BrandId: true
            }
        });
        const deletedProduct = await this._repo.remove(records);
        return deletedProduct;
    }
}