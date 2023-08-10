import express from "express";
import { ProductFeatures } from "../database/models/product.feature.model"; 
import { AppDataSource } from "../database/data.source";
import { ProductFeatureMapper } from "../database/mappers/product.feature.mapper"; 

export class productFeatureService {
    constructor() { }
    getProductFeature = async () => {
        const response = await AppDataSource.manager.find(ProductFeatures);
        return response;
    }

    getByIdProductFeature = async (id: string) => {
        const response = await AppDataSource.manager.findOne(ProductFeatures, { 
            where:
            {
                id:id
            }
        });
        return ProductFeatureMapper.toDto(response);
    }

    createProductFeature = async (req: express.Request) => {
        const productFeatures = new ProductFeatures();
        productFeatures.productId = req.body.productId;
        productFeatures.featureId = req.body.featureId;
        const response =await AppDataSource.manager.save(productFeatures);
        return ProductFeatureMapper.toDto(response);
    }

    updateProductFeature = async (req: express.Request) => {
        const id = req.params.id;
        const productFeature = await AppDataSource.manager.findOne(ProductFeatures, {
            where:
            {
                id:id
            }
        }) ;
        productFeature.productId = req.body.productId;
        productFeature.featureId = req.body.featureId;
        const response =await AppDataSource.manager.save(productFeature);
        return ProductFeatureMapper.toDto(response);
    }

    deleteProductFeature = async (req: express.Request) => {
        const id = req.params.id;
        const productFeature = await AppDataSource.manager.findOne(ProductFeatures,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(productFeature);
        return ProductFeatureMapper.toDto(response);
    }
}
