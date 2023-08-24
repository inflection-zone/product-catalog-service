import express from "express";
import { Feature } from "../database/models/feature.model";
import { AppDataSource } from "../database/data-source";
import { FeatureMapper } from "../database/mapper/feature.mapper";
export class FeatureService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(Feature);
        var records = await repo.find({
            // relations: {
            //     ProductId : true
            // }
        });
        return records;
    }

    SearchFeatureById = async (id:string) => {
        var repo = AppDataSource.getRepository(Feature);
        var records = await repo.find({
            where : {
                    id: id
            },
            // relations: {
            //     ProductId : true
            // }
        });
        return records;
    }

    createFeature = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(Feature);
        const newfeature = repo.create(req.body)
        const createdfeature = await repo.save(newfeature)
        return createdfeature;
    }
    
    updateFeature = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Feature);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        records.Name = req.body.Name;
        records.Description = req.body.Description;
        records.ImageUrl = req.body.ImageUrl;
        const updatedFeature = await repo.save(records);
        return updatedFeature;
    }

    deleteFeature = async (req: express.Request) => {
            const id = req.params.id;
            var repo = AppDataSource.getRepository(Feature);
            var records = await repo.find({
                where : {
                        id: id
                },
                // relations: {
                //     ProductId : true
                // }
            });
            const deletedFeature = await repo.remove(records);
            return deletedFeature;
        }
}