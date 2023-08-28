import express from "express";
import { ProductFeature } from "../database/models/product.feature";
import { Source } from "../database/database.connector.typeorm";
import { FeatureMapper } from "../database/mappers/feature.mapper";

export class ProductFeatureService {
    constructor() { }

    Search = async () => {
        var repo = Source.getRepository(ProductFeature);
        var records = await repo.find({});
        return records;
    }

    SearchProductFeatureById = async (id:string) => {
        var repo = Source.getRepository(ProductFeature);
        var records = await repo.find({
            where : {
                    productFeatureid: id
            },
            // relations: {
            //    // ProductId : true,
            //     FeatureId :  true
            // }
        });
        return records;
    }

    createProductFeature = async (req: express.Request) => {
        var repo = Source.getRepository(ProductFeature);
        const entity = {
            featureId : req.body.featureId,
            productId : req.body.productId
        };
        const newProductFeature = repo.create(entity)
        const createdProductFeature = await repo.save(newProductFeature)
        return createdProductFeature;
    }
    
    updateProductFeature = async (req: express.Request) => {
        const id = req.params.id;
        var repo = Source.getRepository(ProductFeature);
        var records = await repo.findOne({
            where:{
                productFeatureid:id
            }
        })
        records.productId = req.body.ProductId;
        records.featureId = req.body.FeatureId;
        const updatedProductFeature = await repo.save(records);
        return updatedProductFeature;
    }

    deleteProductFeature = async (req: express.Request) => {
            const id = req.params.id;
            var repo = Source.getRepository(ProductFeatures);
            var records = await repo.find({
                where : {
                        productFeatureid: id
                },
                // relations: {
                //    // ProductId : true,
                //     FeatureId : true
                // }
            });
            const deletedProductFeature = await repo.remove(records);
            return deletedProductFeature;
        }
}