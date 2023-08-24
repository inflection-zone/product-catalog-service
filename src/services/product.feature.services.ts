import express from "express";
import { ProductFeatures } from "../database/models/product.feature.model";
import { AppDataSource } from "../database/data-source";
import { FeatureMapper } from "../database/mapper/feature.mapper";
export class ProductFeatureService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(ProductFeatures);
        var records = await repo.find({
            relations: {
               // ProductId : true,
                FeatureId : true
            }
        });
        return records;
    }

    SearchProductFeatureById = async (id:string) => {
        var repo = AppDataSource.getRepository(ProductFeatures);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
               // ProductId : true,
                FeatureId :  true
            }
        });
        return records;
    }

    createProductFeature = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(ProductFeatures);
        const newProductFeature = repo.create(req.body)
        const createdProductFeature = await repo.save(newProductFeature)
        return createdProductFeature;
    }
    
    updateProductFeature = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(ProductFeatures);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        records.ProductId = req.body.ProductId;
        records.FeatureId = req.body.FeatureId;
        const updatedProductFeature = await repo.save(records);
        return updatedProductFeature;
    }

    deleteProductFeature = async (req: express.Request) => {
            const id = req.params.id;
            var repo = AppDataSource.getRepository(ProductFeatures);
            var records = await repo.find({
                where : {
                        id: id
                },
                relations: {
                   // ProductId : true,
                    FeatureId : true
                }
            });
            const deletedProductFeature = await repo.remove(records);
            return deletedProductFeature;
        }
}