import express from "express";
import { Feature } from "../database/models/feature.model"; 
import { AppDataSource } from "../database/data.source";
import { FeatureMapper } from "../database/mappers/feature.mapper"; 

export class featureService {
    constructor() { }
    getFeature = async () => {
        const response = await AppDataSource.manager.find(Feature);
        return response;
    }

    getByIdFeature = async (id: string) => {
        const response = await AppDataSource.manager.findOne(Feature, { 
            where:
            {
                id:id
            }
        });
        return FeatureMapper.toDto(response);
    }

    createFeature = async (req: express.Request) => {
        const feature = new Feature();
        feature.name = req.body.name;
        feature.description = req.body.description;
        feature.imageUrl = req.body.imageUrl;
        const response =await AppDataSource.manager.save(feature);
        return FeatureMapper.toDto(response);
    }

    updateFeature = async (req: express.Request) => {
        const id = req.params.id;
        const feature = await AppDataSource.manager.findOne(Feature, {
            where:
            {
                id:id
            }
        }) ;
        feature.name = req.body.name;
        feature.description = req.body.description;
        feature.imageUrl = req.body.imageUrl;
        const response =await AppDataSource.manager.save(feature);
        return FeatureMapper.toDto(response);
    }

    deleteFeature = async (req: express.Request) => {
        const id = req.params.id;
        const feature = await AppDataSource.manager.findOne(Feature,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(feature);
        return FeatureMapper.toDto(response);
    }
}
